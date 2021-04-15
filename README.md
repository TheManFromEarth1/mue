<img src="https://raw.githubusercontent.com/mue/branding/master/logo/logo_round.png" align="left" width="180px" height="180px"/>
<img align="left" width="0" height="192px" hspace="10"/>

> <a href="https://muetab.com/">Mue</a>

[![License](https://img.shields.io/badge/license-BSD%203-blue?style=flat-square)](/LICENSE) [![Discord](https://img.shields.io/discord/659129207208804381?label=discord&color=7289DA&style=flat-square)](https://discord.gg/zv8C9F8) [![Code Size]( https://img.shields.io/github/languages/code-size/mue/mue?color=green&label=size&style=flat-square)]()
<br>
[![Microsoft Edge](https://img.shields.io/badge/dynamic/json?style=flat-square&label=microsoft%20edge&query=%24.version&url=https%3A%2F%2Fmicrosoftedge.microsoft.com%2Faddons%2Fgetproductdetailsbycrxid%2Faepnglgjfokepefimhbnibfjekidhmja)](https://microsoftedge.microsoft.com/addons/detail/aepnglgjfokepefimhbnibfjekidhmja) [![Firefox](https://img.shields.io/amo/v/mue?label=firefox&style=flat-square)](https://addons.mozilla.org/firefox/addon/mue) [![Chrome](https://img.shields.io/chrome-web-store/v/bngmbednanpcfochchhgbkookpiaiaid?label=chrome&style=flat-square)](https://chrome.google.com/webstore/detail/mue/bngmbednanpcfochchhgbkookpiaiaid)

Mue is a fast, open and free-to-use browser extension that gives a new, fresh and customizable tab page to most modern browsers

<br>

## Table of contents
* [Screenshot](#screenshot)
* [Features](#features)
	* [Planned Features](#planned-features)
* [Installation](#installation)
	* [Chrome](#chrome)
	* [Firefox](#firefox)
	* [Edge Chromium](#edge-chromium)
	* [Naver](#naver)
	* [Other](#other)
* [Contributing](#development)
	* [Requirements](#requirements)
	* [Starting](#starting)
	* [Building](#building)
* [Credits](#credits)
	* [Developers](#developers)
	* [Translators](#translators)
  * [Contributors](#contributors)
  * [Resources](#resources)
## Screenshots
![Screenshot](assets/screenshot.webp)
![Settings Modal](assets/screenshot2.webp)

## Features
* Fast and free
* Supports multiple browsers
* Actively developed and open source
* Automatically updating API (no tracking) with new photos, quotes and offline mode
* Search bar
* Settings - enable/disable various features and customise parts of Mue
* Update modal, copy button and more!
* Marketplace - download custom photo packs made by the community!

### Planned Features
Please see our [roadmap](https://github.com/mue/mue/projects)

## Installation
*A demo of the tab can be found [here](https://demo.muetab.com)*
### Chrome
[![Chrome Web Store Logo](assets/chrome.png)](https://chrome.google.com/webstore/detail/mue/bngmbednanpcfochchhgbkookpiaiaid)
<br>
[Chrome Web Store](https://chrome.google.com/webstore/detail/mue/bngmbednanpcfochchhgbkookpiaiaid)

### Firefox
[![Firefox Add-ons Logo](assets/firefox.png)](https://addons.mozilla.org/firefox/addon/mue)
<br>
[Firefox Add-ons](https://addons.mozilla.org/firefox/addon/mue)

### Edge (Chromium)
~~[Microsoft Edge Addons](https://microsoftedge.microsoft.com/addons/detail/aepnglgjfokepefimhbnibfjekidhmja)~~ Currently outdated, please use the Chrome Web Store version

### Naver
[Whale Store](https://store.whale.naver.com/detail/ecllekeilcmicbfkkiknfdddbogibbnc)

### Other
Please note that we have dropped support for Opera as of Mue 5.0

[GitHub Releases](https://github.com/mue/mue/releases)

## Development
### Requirements
  * [Git](https://git-scm.com/)
  * [Node.JS](https://nodejs.org/)
  * A suitable browser
### Starting
  1. Clone the repository using `git clone https://github.com/mue/mue.git`
  2. Run `yarn` or `npm i` to install all needed dependencies
  3. Run `yarn start` or `npm start` to start testing
  4. Code your heart out! (See the sections below for how to build the extension)
### Building
<details>
  <summary><b>Chrome/Edge (Chromium)</b> (Click to expand)</summary>
  <ol>
    <li> <code>yarn run build</code> or <code>npm run build</code>
    <li> <code>yarn run chrome</code> or <code>npm run chrome</code>
    <li> Visit <code>chrome://extensions</code> in Chrome
    <li> Click <b>Load unpacked</b> (Make sure <b>Developer Mode</b> is on)
    <li> Go to the directory containing the built copy of Mue and click <b>ok</b>
    <li> Enjoy your new tab!
  </ol>
</details>
<details>
  <summary><b>Firefox</b> (Click to expand)</summary>
  <ol>
    <li> <code>yarn run build</code> or <code>npm run build</code>
    <li> <code>yarn run firefox</code> or <code>npm run firefox</code>
    <li> Visit <code>about:debugging#addons</code> in Firefox
    <li> Click <b>Load Temporary Add-on</b>
    <li> Go to the directory containing Mue and click on the <b>manifest.json</b>
    <li> Enjoy your new tab!
  </ol>
</details>
<details>
  <summary><b>Other</b> (Click to expand)</summary>
  <i>Note: To get the full new tab experience, set your browser to open the <code>index.html</code> on startup and tab open!</i>
  <ol>
    <li> <code>yarn run build</code> or <code>npm run build</code>
    <li> Open the <code>index.html</code> in your browser
    <li> Enjoy your new tab!
  </ol>
</details>

## Credits
### Developers
[David Ralph](https://github.com/davidjcralph) - Lead development, photographer <br/>
[Alex Sparkes](https://github.com/alexsparkes) - Name, lead design, photographer <br/>
[Isaac Saunders](https://github.com/eartharoid) - QA, development, photographer <br/>
[Wessel Tip](https://github.com/Wessel) - Development <br/>
### Translators
[Wessel Tip](https://github.com/Wessel), [Heimen Stoffels](https://github.com/Vistaus) - Dutch<br/>
[Alex Sparkes](https://github.com/alexsparkes), [Maxime](https://github.com/exiam) - French<br/>
[Anders](https://github.com/FuryingFox) - Norwegian<br/>
[Pronin Egor](https://github.com/MrZillaGold) - Russian<br/>
[Vicente](https://github.com/Vicente015) - Spanish<br/>
[Austin Huang](https://github.com/austinhuang0131) - Chinese (Simplified)<br/>
[FreeFun](https://github.com/xXFreeFunXx) - German<br/>
### Contributors
Many thanks to [Highholding](https://discord.bio/p/highholding), [Noa Shapira](#), [Roee Lupo](https://github.com/RoeeLupo), [Jeroen](#), [Gio](#), [Anders](https://github.com/FuryingFox), [Oded Shapira](https://twitter.com/dondishdev), Jacob Tyrrell and [Nikka Lai](#) for letting us use their wonderful photographs.

And finally, a big thank you to all the other [contributors](https://github.com/mue/mue/graphs/contributors)!
### Resources
[Pexels](https://pexels.com) - Stock photos used for offline mode<br/>
