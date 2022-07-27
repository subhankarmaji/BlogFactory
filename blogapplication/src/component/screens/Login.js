import React from "react";
import LoginForm from "./LoginForm";
import loginbloger from '../assets/Loginblogger.gif'
function Login(){
    return(
        <div className="row d-flex flex-row  align-items-center" style={{height:"100%"}}>
        <div className="col-md-7 mt-4">
            <div  style={{height:"98%",width:"80%", backgroundColor:"white",padding:"45px",boxShadow:"5px 5px 10px #ABC9FF",marginLeft:"8%",borderRadius:"10px",border:"1px solid #66BFBF "}}>
                <LoginForm/>
            
            </div>
        </div>
        <div className="col-md-5">
            <img src={loginbloger} style={{height:"65%",width:"90%"}}/>
        </div>
    </div>
    );
}
export default Login;