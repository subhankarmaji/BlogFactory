import React from "react";
import {ThreeDots	 } from  'react-loader-spinner'
function Loader(){
    return(
    <div style={{position:"fixed",height:"100vh",width:"100%",top:0,left:0,backgroundColor:"#F9F2ED",opacity:0.94}}>
    <div style={{position:"fixed",top:"50%", left:"50%", zIndex:1}}>
        <ThreeDots	
    height="100"
    width="100"
    color='#3AB0FF'
    ariaLabel='loading'
  />
    </div>
    </div>
    );
}
export default Loader;
