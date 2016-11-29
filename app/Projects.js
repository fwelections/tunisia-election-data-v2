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
		
		const Tstatistics = <Translate type="text" content="pred2014.Tstatistics"/>
		const Sstatistics = <Translate type="text" content="pred2014.Sstatistics"/>
		const Tturnoutbyage = <Translate type="text" content="pred2014.Tturnoutbyage"/>
		const Sturnoutbyage = <Translate type="text" content="pred2014.Sturnoutbyage"/>
		const Tbejir2 = <Translate type="text" content="pred2014.Tbejir2"/>
		const Sbejir2 = <Translate type="text" content="pred2014.Sbejir2"/>
		const Tmarzoukir2 = <Translate type="text" content="pred2014.Tmarzoukir2"/>
		const Smarzoukir2 = <Translate type="text" content="pred2014.Smarzoukir2"/>
		const Tbejir1 = <Translate type="text" content="pred2014.Tbejir1"/>
		const Sbejir1 = <Translate type="text" content="pred2014.Sbejir1"/>
		const Tmarzoukir1 = <Translate type="text" content="pred2014.Tmarzoukir1"/>
		const Smarzoukir1 = <Translate type="text" content="pred2014.Smarzoukir1"/>
		const TturnoutR1VsR2 = <Translate type="text" content="pred2014.TturnoutR1VsR2"/>
		const SturnoutR1VsR2 = <Translate type="text" content="pred2014.SturnoutR1VsR2"/>
		const TturnoutR1 = <Translate type="text" content="pred2014.TturnoutR1"/>
		const SturnoutR1 = <Translate type="text" content="pred2014.SturnoutR1"/>
		const TnumberOfPollingcenter = <Translate type="text" content="pred2014.TnumberOfPollingcenter"/>
		const SnumberOfPollingcenter = <Translate type="text" content="pred2014.SnumberOfPollingcenter"/>
		const TcanceledBallot = <Translate type="text" content="pred2014.TcanceledBallot"/>
		const ScanceledBallot = <Translate type="text" content="pred2014.ScanceledBallot"/>

		const TCandidate = <Translate type="text" content="pred2014.TCandidate"/>
		const SComparing = <Translate type="text" content="pred2014.SComparing"/>
		
		const elecType = 'Presedential'
		const elecYear = '2014'
		const link = '/Projects/par14/'
		return(
			<div>
			<Layout SendToFather={this.handleSend} type='Presedential'/>
					{/*the widget component accepts the title  sub img link and map link */}
					<div className='col-md-12' >
					<Widget title ={Tfull} subtitle={Sfull} imgsrc="full.png"   elecType={elecType} elecYear={elecYear} link={link}/>
					<Widget title ={Tstatistics} subtitle={Sstatistics} imgsrc="pre-by-gender.png"  direction={this.state.direction} elecType={elecType} elecYear={elecYear} link={link}/>
					<Widget title ={Tturnoutbyage} subtitle={Sturnoutbyage} imgsrc="turnout-by-age.png"  direction={this.state.direction} elecType={elecType} elecYear={elecYear} link={link}/>					
					<Widget title ={TGender} subtitle={SGender} imgsrc="turnout-by-age2.png"  direction={this.state.direction} elecType={elecType} elecYear={elecYear} link={link}/>
					</div>
					<div className='col-md-12' >
					<Widget title ={Tbejir2} subtitle={Sbejir2} imgsrc="Beji-R2.png"  direction={this.state.direction} elecType={elecType} elecYear={elecYear} link={link}/>					
					<Widget title ={Tmarzoukir2} subtitle={Smarzoukir2} imgsrc="marzouki-r2.png"  direction={this.state.direction} elecType={elecType} elecYear={elecYear} link={link}/>					
					<Widget title ={Tbejir1} subtitle={Sbejir1} imgsrc="beji-r1.png"  direction={this.state.direction} elecType={elecType} elecYear={elecYear} link={link}/>					
					<Widget title ={TCandidate} subtitle={SComparing} imgsrc='comparingM-Vs-B.png' direction={this.state.direction} elecType={elecType} elecYear={elecYear} link={link}/>										
					</div>
					
					<div className='col-md-12'>
					<Widget title ={TturnoutR1VsR2} subtitle={SturnoutR1VsR2} imgsrc="turnout-r1vr2.png"  direction={this.state.direction} elecType={elecType} elecYear={elecYear} link={link}/>					
					<Widget title ={TturnoutR1} subtitle={SturnoutR1} imgsrc="turnout-r2.png"  direction={this.state.direction} elecType={elecType} elecYear={elecYear} link={link}/>					
					<Widget title ={Tmarzoukir1} subtitle={Smarzoukir1} imgsrc="marzouki-r1.png"  direction={this.state.direction} elecType={elecType} elecYear={elecYear} link={link}/>					
					<Widget title ={TnumberOfPollingcenter} subtitle={SnumberOfPollingcenter} imgsrc="Number-of-polling.png"  direction={this.state.direction} elecType={elecType} elecYear={elecYear} link={link}/>					
					</div>
					<div className='col-md-12'>
					<Widget title ={TcanceledBallot} subtitle={ScanceledBallot} imgsrc="canceled-ballot.png"  direction={this.state.direction} elecType={elecType} elecYear={elecYear} link={link}/>					

					</div>
		</div>
		);
	}
};

export default Projects