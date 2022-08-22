import React from "react";
import image from '../assets/404-plug.gif'
function ErrorPage(){
    return(
        <div className="d-flex justify-content-center align-items-center flex-wrap" style={{height:"100%"}}>
            <div style={{position:'relative',marginRight:"10%"}}>
                <div style={{height:"300px",width:"300px",borderRadius:"150px",backgroundColor:"#D6EFED"}}></div>
                <img style={{position:"absolute",top:0,right:"-32%",transform:"rotate(90deg)"}} src={image} alt="plug-design"/>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center" >
                <h1 style={{fontSize:"80px",fontFamily:"Arima",fontWeight:"bold",color:"#0F3D3E"}}>404</h1>
                <h2 style={{fontSize:"45px",fontFamily:"Arima",fontWeight:"bold",marginTop:-20,color:"#5A8F7B"}}>Page Not Found</h2>
                <p style={{fontSize:"25px",fontFamily:"Arima",fontWeight:"bold",color:"#B2A4FF"}}>We're sorry, the page you requested could not be found</p>
                <p style={{marginTop:-20,fontSize:"25px",fontFamily:"Arima",fontWeight:"bold",color:"#B2A4FF"}}>Please go back to the homepage</p>
                <button type="button" class="btn btn-info" style={{backgroundColor:"#0F3D3E",color:"#fff"}} onClick={()=>{window.location.replace("/")}}>Go Home</button>

            </div>
        </div>
    );
}
export default ErrorPage;