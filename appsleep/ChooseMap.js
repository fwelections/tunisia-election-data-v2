import React, { Component } from 'react';
import LeafletMap from './LeafletMap';
import Layout from './Layout';
import Highchart from './Highchart'

const ChooseMap = (props)=>{

  switch(props.param.mapId) {
    case 'full':
      	return <LeafletMap/> 
        break;    
    case "comparingM-Vs-B":
      	return <Highchart/> 
        break;
    
    default:
        return(<h1>{console.log('err')}</h1>)
}
  return(

   		<div style={{height:'auto'}}>

   			<Layout/>

   		</div>
  );

}

export default ChooseMap