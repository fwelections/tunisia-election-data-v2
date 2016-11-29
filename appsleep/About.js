import React, { Component } from 'react';
import Layout from './Layout';
import Translate from 'react-translate-component';
import Paper from 'material-ui/Paper';

const About = (props)=>{
	
	return(
		<div>
			<Layout />
			<div className='col-md-1'></div>
			<Paper className='col-md-10' style={{height:'500px',marginTop:'20px'}} zDepth={1} >
				<h1>About</h1>
			 	<Translate content="about.paragraph" />
				<a href="http://www.mourakiboun.org" target="_blank">Mourakiboun</a>
				<Translate content="about.p2" />
				<a href="http://democracyinternational.com" target="_blank">Democracy International</a>
				<Translate content="about.p3" />
				<a href="http://developmentseed.org" target="_blank">Development Seed</a>
			</Paper>
			 <div className='col-md-1'></div>
		</div>
	);

}
export default About
