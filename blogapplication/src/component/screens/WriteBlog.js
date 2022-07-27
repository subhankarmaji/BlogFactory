import React from "react";
import BlogForm from "./BlogForm";
import plant from '../assets/plant.png';

function WriteBlog(){
    return(
        <>
         {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ABC9FF" fill-opacity="0.7" d="M0,256L30,250.7C60,245,120,235,180,202.7C240,171,300,117,360,106.7C420,96,480,128,540,144C600,160,660,160,720,144C780,128,840,96,900,117.3C960,139,1020,213,1080,208C1140,203,1200,117,1260,69.3C1320,21,1380,11,1410,5.3L1440,0L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg> */}
        <div className="d-flex justify-content-center align-items-center" style={{height:"100%",width:"100%"}}>
            <div style={{height:"95%",width:"60%",padding:"40px",borderRadius:"15px",boxShadow:"5px 5px 10px #66BFBF",zIndex:1,border:"1px solid #66BFBF "}}>
                <BlogForm/>
            </div>

            <img src={plant} alt="plant" style={{position:"absolute",height:"290px",top:-10,right:"10%",transform:"rotate(20deg)"}}/>
        </div>
        </>
    );
}
export default WriteBlog;