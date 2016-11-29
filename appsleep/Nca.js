/*this component contains the layout and the widgets of the NCA 2011 project */
import React, { Component } from 'react';
import Layout from './Layout';
import Widget from './NcaWidget'
import Translate from 'react-translate-component';

class Nca extends Component{
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
		const TNahdha = <Translate type="text" content="nca2011.TNahdha"/>
		const SNahdha = <Translate type="text" content="nca2011.SNahdha"/>
		const TCPR = <Translate type="text" content="nca2011.TCPR"/>
		const SCPR = <Translate type="text" content="nca2011.SCPR"/>
		const TAridha = <Translate type="text" content="nca2011.TAridha"/>
		const SAridha = <Translate type="text" content="nca2011.SAridha"/>
		const TTakatol = <Translate type="text" content="nca2011.TTakatol"/>
		const STakatol = <Translate type="text" content="nca2011.STakatol"/>
		const TPDP = <Translate type="text" content="nca2011.TPDP"/>
		const SPDP = <Translate type="text" content="nca2011.SPDP"/>
		const TAfek = <Translate type="text" content="nca2011.TAfek"/>
		const SAfek = <Translate type="text" content="nca2011.SAfek"/>	
		const TTurnoutElg = <Translate type="text" content="nca2011.TTurnoutElg"/>
		const TSurnoutElg = <Translate type="text" content="nca2011.TSurnoutElg"/>
		const TRegistered = <Translate type="text" content="nca2011.TRegistered"/>
		const SRegistered = <Translate type="text" content="nca2011.SRegistered"/>
		const TTurnoutReg = <Translate type="text" content="nca2011.TTurnoutReg"/>
		const TSurnoutReg = <Translate type="text" content="nca2011.TSurnoutReg"/>
		const TPassive = <Translate type="text" content="nca2011.TPassive"/>
		const SPassive = <Translate type="text" content="nca2011.SPassive"/>
		const TCoalition = <Translate type="text" content="nca2011.TCoalition"/>
		const SCoalition = <Translate type="text" content="nca2011.SCoalition"/>
		const TBallots = <Translate type="text" content="nca2011.TBallots"/>
		const SBallots = <Translate type="text" content="nca2011.SBallots"/>

		return(
			<div>
			<Layout SendToFather={this.handleSend} type='NCA'/>
					{/*the widget component accepts the title  sub img link and map link */}
					<div className='col-md-12' >
						<Widget title ={TNahdha} subtitle={SNahdha} imgsrc="nahdha.png"  />
						<Widget title ={TCPR} subtitle={SCPR} imgsrc='cpr.png' direction={this.state.direction}/>					
						<Widget title ={TAridha} subtitle={SAridha} imgsrc="aridaa.png"  direction={this.state.direction}/>
						<Widget title ={TTakatol} subtitle={STakatol} imgsrc="ETTAKATOL.png"  direction={this.state.direction}/>					
					</div>
					<div className='col-md-12' >
						<Widget title ={TPDP} subtitle={SPDP} imgsrc="PDP.png"  direction={this.state.direction}/>
						<Widget title ={TAfek} subtitle={SAfek} imgsrc="afek.png"  direction={this.state.direction}/>					
						<Widget title ={TTurnoutElg} subtitle={TSurnoutElg} imgsrc="turnout.png"  direction={this.state.direction}/>					
						<Widget title ={TRegistered} subtitle={SRegistered} imgsrc="eligible.png"  direction={this.state.direction}/>					
					</div>
					<div className='col-md-12'>
						<Widget title ={TTurnoutReg} subtitle={TSurnoutReg} imgsrc="active.png"  direction={this.state.direction}/>					
						<Widget title ={TPassive} subtitle={SPassive} imgsrc="passive.png"  direction={this.state.direction}/>
						<Widget title ={TCoalition} subtitle={SCoalition} imgsrc="wasted.png"  direction={this.state.direction}/>					
						<Widget title ={TBallots} subtitle={SBallots} imgsrc="blanc.png"  direction={this.state.direction}/>					
					</div>
			</div>
		);
	}
};

export default Nca
