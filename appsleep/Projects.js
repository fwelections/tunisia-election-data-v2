/*this component contains the layout and the widgets */
import React, { Component } from 'react';
import Layout from './Layout';
import Widget from './Widget'
import Translate from 'react-translate-component';

class Projects extends Component{
	constructor(props) {
		super(props);
		this.state = {
			direction : 'left-to-right'
		};
		this.handleSend= this.handleSend.bind(this);
	}
		/*need to know which language is chosen to send to son widget 'rtl' or 'ltr' */
		handleSend(value){
			if (value == 'ar') {
				 this.setState({direction : 'right-to-left'});
			}else{
				 this.setState({direction : 'left-to-right'});
			}
		}
	render(){
		//we get the title nd subtitle of the widget from the localTranslate file
		const Tfull = <Translate type="text" content="pred2014.Tfull"/>
		const Sfull = <Translate type="text" content="pred2014.Sfull"/>

		const TGender = <Translate type="text" content="pred2014.TGender"/>
		const SGender = <Translate type="text" content="pred2014.SGender"/>

		const TCandidate = <Translate type="text" content="pred2014.TCandidate"/>
		const SComparing = <Translate type="text" content="pred2014.SComparing"/>

		return(
			<div>
			<Layout SendToFather={this.handleSend} type='Presedential'/>
					{/*the widget component accepts the title  sub img link and map link */}
					<div className='col-md-12' >
					<Widget title ={Tfull} subtitle={Sfull} imgsrc="full.png"  />
					<Widget title ={TCandidate} subtitle={SComparing} imgsrc='comparingM-Vs-B.png' direction={this.state.direction}/>					
					<Widget title ={TGender} subtitle={SGender} imgsrc="pre-by-gender.png"  direction={this.state.direction}/>
					<Widget title ={TGender} subtitle={SGender} imgsrc="turnout-by-age.png"  direction={this.state.direction}/>					
					</div>
					<div className='col-md-12' >
					<Widget title ={TGender} subtitle={SGender} imgsrc="turnout-by-age2.png"  direction={this.state.direction}/>
					<Widget title ={TGender} subtitle={SGender} imgsrc="Beji-R2.png"  direction={this.state.direction}/>					
					<Widget title ={TGender} subtitle={SGender} imgsrc="marzouki-r2.png"  direction={this.state.direction}/>					
					<Widget title ={TGender} subtitle={SGender} imgsrc="marzouki-r1.png"  direction={this.state.direction}/>					
					</div>
					<div>
					<Widget title ={TGender} subtitle={SGender} imgsrc="beji-r1.png"  direction={this.state.direction}/>					
					</div>
		</div>
		);
	}
};

export default Projects