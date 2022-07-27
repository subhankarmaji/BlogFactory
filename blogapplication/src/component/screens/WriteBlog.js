import React from "react";
import BlogForm from "./BlogForm";
import plant from '../assets/plant.png';

function WriteBlog(){
    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:"100%",width:"100%",}}>
            <div style={{height:"95%",width:"60%",padding:"40px",borderRadius:"15px",boxShadow:"5px 5px 10px #66BFBF",zIndex:1,border:"1px solid #66BFBF "}}>
                <BlogForm/>
            </div>

            <img src={plant} alt="plant" style={{position:"absolute",height:"290px",top:-10,right:"10%",transform:"rotate(20deg)"}}/>
        </div>
    );
}
export default WriteBlog;