/*defining the navbar*/
//and setting the language switcher here
import React, { Component } from 'react';
import {Link} from 'react-router';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import counterpart  from 'counterpart';
import Translate from 'react-translate-component';

export default class Layout extends Component{

	constructor(props) {
    super(props);
    this.state = {
    	value: 'en'
	};
    this.handleChange = this.handleChange.bind(this);
  }
	componentWillMount() {
		counterpart.getLocale()
	}
	handleChange (event, index, value) {
	   this.setState({value})
	   counterpart.setLocale(value);
	   this.props.SendToFather(value)
	};	



	render(){
		/*this config is set to allow navbar language transtlation*/
		const home = <Translate type="text" content="navbar.home"/>
		const projects = <Translate type="text" content="navbar.projects"/>
		const about = <Translate type="text" content="navbar.about"/>
		const en = <Translate type="text" content="navbar.en"/>
		const fr = <Translate type="text" content="navbar.fr"/>
		const ar = <Translate type="text" content="navbar.ar"/>

		const Presedential = <Translate type="text" content="navbar.Presedential"/>
		const Parlamentary = <Translate type="text" content="navbar.Parlamentary"/>
		const NCA = <Translate type="text" content="navbar.NCA"/>
		return(
			<div>

		<div className="navbar navbar-info">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		      </button>
		      <a className="navbar-brand" href="javascript:void(0)">Tun Elec Data</a>
		    </div>
		    <div className="navbar-collapse collapse navbar-responsive-collapse">
		      <ul className="nav navbar-nav">
		        <li><Link to={'/'} activeClassName="activeN">{home}</Link></li>
		        <li>
		        <DropDownMenu labelStyle={{color:'inherit'}} value={this.props.type} >
			          <MenuItem value={'Presedential'} label='projects' primaryText={Presedential} containerElement={<Link to="/Projects" />}/>
			          <MenuItem value={'Parlamentary'} primaryText={Parlamentary} containerElement={<Link to="/Parlamantary" />}/>
			          <MenuItem value={'NCA'} primaryText={NCA} containerElement={<Link to="/Nca" />}/>
			    </DropDownMenu>
		        </li>
		        
		        <li ><Link to={'/About'} activeClassName="activeN">{about}</Link></li>
		        <li>      	
		        	<DropDownMenu labelStyle={{color:'inherit'}} value={this.state.value} onChange={this.handleChange}>
			          <MenuItem value={'en'} primaryText={en} />
			          <MenuItem value={'fr'} primaryText={fr} />
			          <MenuItem value={'ar'} primaryText={ar} />
			        </DropDownMenu>
			    </li>
		      </ul>
		    </div>
		  </div>
		</div>

      	{this.props.children}
      	

    </div>
		);
	}
};
	Layout.defaultProps = {
	  type: 'Presedential'
	};
