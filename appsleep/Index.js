import React from 'react'
import { render } from 'react-dom'
import App from './App'
import About from './About'
import Projects from './Projects'
import MapComp from './MapComp'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Parlamantary from './Parlamantary';
import Nca from './Nca';
import { Router, Route, browserHistory } from 'react-router';

render((
    <MuiThemeProvider>
    <Router history={ browserHistory }>
        <Route path="/ted/" component={App}/>
        <Route path="/ted/About/" component={About}/>
        
        <Route path="/ted/Projects/" component={Projects}/>
	   	<Route path="/ted/Projects/pre14/:mapId/" component={MapComp}/>

	   	<Route path="/ted/Parlamantary/" component={Parlamantary}/>
	   	<Route path="/ted/Projects/par14/:mapId/" component={MapComp}/>

	   	<Route path="/ted/Nca/" component={Nca}/>
	   	<Route path="/ted/Projects/nca11/:mapId/" component={MapComp}/>

    </Router>
    </MuiThemeProvider>
    ),document.querySelector('#root'));