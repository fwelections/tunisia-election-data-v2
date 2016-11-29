import React, { Component } from 'react';
import Translate from 'react-translate-component';
import Layout from './Layout';
import ChooseMap from './ChooseMap'

const MapComp = (props)=>{
  
  return(

   		<div style={{height:'auto'}}>

   			<Layout/>
   			<ChooseMap param={props.params}/>
   		</div>
  );

}

export default MapComp