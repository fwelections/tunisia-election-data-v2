/*this is the widget of the Nca */
import React, { Component } from 'react';
import {Link} from 'react-router';

export default class NcaWidget extends Component{
	
	render(){
		const imgsrc = '/ted/img/' +this.props.imgsrc;
		/*get the map id*/
		const linkk = '/ted/Projects/nca11/'+ this.props.imgsrc.match(/.+?(?=\.)/g)+'/';
		//console.log(linkk)
		
		/*get the direction style as prop whether r-t-l or l-t-r*/
		const direction = this.props.direction + ' p-a' 
		return(
			<div className="col-xs-6 col-sm-12 col-md-3 col-0">
				<div className="box">
					<div className="item">
						<div className="item-overlay active p-a">
							<span className="pull-right label dark-white text-color"><i className="fa fa-envelope-open fa-fw"></i> 2011</span>
							<a href className="pull-left text-u-c label label-md info">NCA</a>
						</div>
						<img src={imgsrc} className="w-full"/>
					</div>
					<div className={direction}>
						<div className="m-b h-2x"><Link href className="_800" to={linkk}>{this.props.title}</Link></div>
						<p className="h-3x">{this.props.subtitle}</p>
						<div><Link className="btn btn-xs white" to={linkk}>Read More</Link></div>
					</div>
				</div>
			</div>
		);
	}
};