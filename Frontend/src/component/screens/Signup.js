import React from "react";
import RegisterForm from "./RegisterForm";
import registerbloger from '../assets/registerBlogger.gif';

function Signup(){
    return(
        <div className="row d-flex flex-row  align-items-center">
            <div className="col-md-7 mt-2">
                <div  style={{height:"98%",width:"80%", backgroundColor:"white",padding:"35px",boxShadow:"5px 5px 10px #ABC9FF",marginLeft:"8%",borderRadius:"10px",border:"1px solid #66BFBF "}}>
                    <RegisterForm/>
                
                </div>
            </div>
            <div className="col-md-5">
                <img src={registerbloger} style={{height:"70%",width:"95%"}}/>
            </div>
       </div>
    );
}
export default Signup;