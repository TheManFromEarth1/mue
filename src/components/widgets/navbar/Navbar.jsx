import React from 'react';

import RefreshIcon from '@material-ui/icons/RefreshRounded';
import Gear from '@material-ui/icons/SettingsRounded';
import NotesIcon from '@material-ui/icons/AssignmentRounded';
import Report from '@material-ui/icons/SmsFailed';

import Tooltip from '@material-ui/core/Tooltip';

import Notes from './Notes';
import View from '../background/Maximise';
import Favourite from '../background/Favourite';

import './scss/index.scss';

export default function Navbar(props) {
  const language = window.language;

  return (
    <div className='navbar-container'>
      {(localStorage.getItem('view') === 'true') ? <View/> :null}
      {(localStorage.getItem('favouriteEnabled') === 'true') ? <Favourite/> :null}
  
      {(localStorage.getItem('notesEnabled') === 'true') ?
        <div className='notes'>
          <NotesIcon className='topicons'/>
          <Notes/>
        </div>
      :null}

      {(window.constants.BETA_VERSION === true) ? 
        <Tooltip title='Feedback' placement='top'>
          <Report className='topicons' onClick={() => props.openModal('feedbackModal')}/>
        </Tooltip>
      :null}

      {(localStorage.getItem('refresh') === 'true') ?
        <Tooltip title={language.widgets.navbar.tooltips.refresh}>
          <RefreshIcon className='refreshicon topicons' onClick={() => window.location.reload()}/>
        </Tooltip>
      :null}

      <Tooltip title={language.modals.main.navbar.settings} placement='top'>
        <Gear className='settings-icon topicons' onClick={() => props.openModal('mainModal')}/>
      </Tooltip>
    </div>
  );
}
