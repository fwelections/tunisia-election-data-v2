/*this component contains the layout and the widgets for parlamantary Projects */
import React, { Component } from 'react';
import Layout from './Layout';
import Widget from './ParlamantaryWidget'
import Translate from 'react-translate-component';

class Parlamantary extends Component{
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
		const Tfull = <Translate type="text" content="par2014.Tfull"/>
		const Sfull = <Translate type="text" content="par2014.Sfull"/>

		const TGender = <Translate type="text" content="par2014.TGender"/>
		const SGender = <Translate type="text" content="par2014.SGender"/>

		const TPartyNahdha = <Translate type="text" content="par2014.TPartyNahdha"/>
		const SPartyNahdha = <Translate type="text" content="par2014.SPartyNahdha"/>
		
		const TPartyNida = <Translate type="text" content="par2014.TPartyNida"/>
		const SPartyNida = <Translate type="text" content="par2014.SPartyNida"/>
		
		const TPartyUpl = <Translate type="text" content="par2014.TPartyUpl"/>
		const SPartyUpl = <Translate type="text" content="par2014.SPartyUpl"/>

		return(
			<div>
			<Layout SendToFather={this.handleSend} type='Parlamentary'/>
					{/*the widget component accepts the title  sub img link and map link */}
					<div className='col-md-12' >
					<Widget title ={Tfull} subtitle={Sfull} imgsrc="full.png"  />
					<Widget title ={TGender} subtitle={SGender} imgsrc="par-by-gender.png"  direction={this.state.direction}/>
					<Widget title ={TPartyNahdha} subtitle={SPartyNahdha} imgsrc='par-nahdha-res.png' direction={this.state.direction}/>					
					<Widget title ={TPartyNida} subtitle={SPartyNida} imgsrc="par-nida-res.png"  direction={this.state.direction}/>					
					</div>
					<div className='col-md-12' >
					<Widget title ={TPartyUpl} subtitle={SPartyUpl} imgsrc="par-upl-res.png"  direction={this.state.direction}/>
					</div>
		</div>
		);
	}
};

export default Parlamantary