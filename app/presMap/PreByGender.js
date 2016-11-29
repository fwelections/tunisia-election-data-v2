import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Turnout from './Turnout'

import Paper from 'material-ui/Paper';


export default class PreByGender extends Component{
	//constructor here

	constructor(props) {
		super(props);
		this.state=({
			genderTurnout:'maleTurnout'
		})
		this.handleChange=this.handleChange.bind(this);
	}
	
	handleChange(e){
		//console.log(e.currentTarget.value)
		if (e.currentTarget.value == 'men') {
			this.setState({genderTurnout: 'maleTurnout'});
		}else{
			this.setState({genderTurnout: 'womenTurnout'});
		}
	}
	render(){
		return(
			<div>
		<MuiThemeProvider>
	       <Paper style = {{height :'100px',width : '220px' }}>
	           <RadioButtonGroup name="type" onChange={this.handleChange} defaultSelected="women">
	      <RadioButton
	        value="women"
	        label="women_turnout"
	      />
	      <RadioButton
	        value="men"
	        label="men_turnout"
	      />
	      </RadioButtonGroup>
	       </Paper>
       </MuiThemeProvider>
			<Turnout genderTurnout = {this.state.genderTurnout}/>
			</div>
		);
	}

};
