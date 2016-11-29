import React from 'react'
import { render } from 'react-dom'
import App from './App'
import About from './About'
import Projects from './Projects'
import MapComp from './MapComp'
import Parlamantary from './Parlamantary'
import Nca from './Nca'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Router, Route, browserHistory } from 'react-router';

render((
    <MuiThemeProvider>
    <Router history={ browserHistory }>
        <Route path="/" component={App}/>
        <Route path="/About" component={About}/>
        
        <Route path="/Projects" component={Projects}/>
	   	<Route path="/Projects/pre14/:mapId" component={MapComp}/>

	   	<Route path="/Parlamantary" component={Parlamantary}/>
	   	<Route path="/Projects/par14/:mapId" component={MapComp}/>

	   	<Route path="/Nca" component={Nca}/>
	   	<Route path="/Projects/nca11/:mapId" component={MapComp}/>

    </Router>
    </MuiThemeProvider>
    ),document.querySelector('#root'));