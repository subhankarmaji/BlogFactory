import React from "react";
import { ContactForm } from "./ContactForm";
import contactImg from '../assets/contact.gif';
import design from '../assets/flower4.png';
function ContactPage(){
    return(
         <div className="row d-flex flex-row  align-items-center" style={{height:"100%"}}>
         <div className="col-md-7 mt-4">
             <div className="d-flex"  style={{height:"98%",width:"78%", backgroundColor:"white",padding:"45px",boxShadow:"5px 5px 10px #ABC9FF",marginLeft:"8%",borderRadius:"10px",border:"1px solid #66BFBF ",position:"relative"}}>
                <div style={{width:"90%",zIndex:1}}>
                <ContactForm/>
                </div>
             <img src={design}alt="design" style={{width:"50%",position:"absolute",bottom:0,right:0}}/>
             </div>

         </div>
         <div className="col-md-5">
             <img src={contactImg} style={{height:"50%",width:"80%"}}/>
         </div>
     </div>
    );
}export default ContactPage;