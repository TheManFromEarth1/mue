import { useState } from 'react';
import { Info, LocationOn, PhotoCamera, Crop as Resolution, Person as Photographer, GetApp as Download } from '@material-ui/icons';

const toDataURL = async (url) => {
  const res = await fetch(url);
  return URL.createObjectURL(await res.blob());
};

const downloadImage = async (info) => {
  const link = document.createElement('a');
  link.href = await toDataURL(info.url);
  // todo: make this a bit cleaner
  link.download = `mue-${info.credit.toLowerCase().replaceAll(' ', '-')}-${info.location.toLowerCase().replaceAll(',', '').replaceAll(' ', '-')}.jpg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.stats.postEvent('feature', 'Background download');
};

export default function PhotoInformation(props) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const language = window.language.widgets.background;

  if (props.info.hidden === true || !props.info.credit) {
    return null;
  }

  // remove unsplash and pexels text
  const photographer = props.info.credit.split(` ${language.unsplash}`)[0].split(` ${language.pexels}`);

  let credit = props.info.credit;
  let photo = language.credit;

  // unsplash and pexels credit
  if (props.info.photographerURL && props.info.photographerURL !== '' && !props.info.offline && props.api) {
    if (props.api === 'unsplash') {
      photo = <a href={props.info.photoURL + '?utm_source=mue'} target='_blank' rel='noopener noreferrer'>{language.credit}</a>;
      credit = <><a href={props.info.photographerURL} target='_blank' rel='noopener noreferrer'>{photographer}</a> <a href='https://unsplash.com?utm_source=mue' target='_blank' rel='noopener noreferrer'>{language.unsplash}</a></>;
    } else {
      photo = <a href={props.info.photoURL} target='_blank' rel='noopener noreferrer'>{language.credit}</a>;
      credit = <><a href={props.info.photographerURL} target='_blank' rel='noopener noreferrer'>{photographer}</a> <a href='https://pexels.com' target='_blank' rel='noopener noreferrer'>{language.pexels}</a></>;
    }
  }

  // get resolution
  const img = new Image();
  img.onload = (event) => {
    setWidth(event.target.width);
    setHeight(event.target.height);
  }
  img.src = (localStorage.getItem('ddgProxy') === 'true' && !props.info.offline && !props.url.startsWith('data:')) ? window.constants.DDG_IMAGE_PROXY + props.url : props.url;

  // info is still there because we want the favourite button to work
  if (localStorage.getItem('photoInformation') === 'false') {
    return (
      <div className='photoInformation'>
        <h1>{photo} <span id='credit'>{credit}</span></h1>
        <div style={{ display: 'none' }}>
          <span id='infoLocation'>{props.info.location || 'N/A'}</span>
          <span id='infoCamera'>{props.info.camera || 'N/A'}</span>
          <span id='infoResolution'>{width}x{height}</span>
        </div>
      </div>
    );
  }

  return (
    <div className='photoInformation'>
      <h1>{photo} <span id='credit'>{credit}</span></h1>
      <Info className='photoInformationHover'/>
      <div className='infoCard'>
        <Info className='infoIcon'/>
        <h1>{language.information}</h1>
        <hr/>
        <LocationOn/>
        <span id='infoLocation'>{props.info.location || 'N/A'}</span>
        <PhotoCamera/>
        <span id='infoCamera'>{props.info.camera || 'N/A'}</span>
        <Resolution/>
        <span id='infoResolution'>{width}x{height}</span>
        <Photographer/>
        <span>{photographer}</span>
        {(localStorage.getItem('downloadbtn') === 'true') && !props.info.offline && !props.info.photographerURL ? 
          <>
            <Download/>
            <span className='download' onClick={() => downloadImage(props.info)}>{language.download}</span>
          </> 
        : null}
      </div>
    </div>
  );
}
