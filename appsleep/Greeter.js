import React, { Component } from 'react';
import Translate from 'react-translate-component';

const Greeter = (props)=>{
  
  return(
    <Translate {...props} content="example.greeting" />
  );

}

export default Greeter