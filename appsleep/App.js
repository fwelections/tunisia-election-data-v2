import React, { Component } from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Layout from './Layout';
import ParallaxPic from './ParallaxPic'

/*import Counter from './Counter';
import Greeter  from './Greeter';*/
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//setting language support
import counterpart  from 'counterpart';
import Translate    from 'react-translate-component';
counterpart.registerTranslations('en',require('./../locales/en'));
counterpart.registerTranslations('fr',require('./../locales/fr'));
counterpart.registerTranslations('ar',require('./../locales/ar'));

export default class App extends Component {
  render() {
    return (
      <div>
      <MuiThemeProvider>
        <Layout/>
      </MuiThemeProvider>
      <ParallaxPic header="home.first" subheader="home.firstSub" classname="backgrAirbaloon" url = "url(img/MohamedMessaraEPA.jpg)"/>      
      <ParallaxPic header="home.second" subheader="home.secondSub" classname="backgrGirl" url = "url(img/tunisias-first-presidentialPhotobyAPHasseneDridi.jpg)" />      

     </div>
    );
  }
}