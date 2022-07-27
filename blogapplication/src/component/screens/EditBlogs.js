import React, { useEffect, useState } from "react";
import EditBlogForm from "./EditBlogForm";
import Loader from "./Loader";
import plant from '../assets/plant.png';
function EditBlogs(){
    const [Blog,setBlog] = useState(null);
    useEffect(()=>{
        if(localStorage.getItem("Blog")===null) window.location.replace("/error");
        else{
            setBlog(JSON.parse(localStorage.getItem("Blog")));
        }
    },[]);
    return(
        <div>
            {Blog===null?<Loader/>
            :
            <>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#A5C9CA" fill-opacity="1" d="M0,96L30,106.7C60,117,120,139,180,144C240,149,300,139,360,122.7C420,107,480,85,540,96C600,107,660,149,720,181.3C780,213,840,235,900,229.3C960,224,1020,192,1080,170.7C1140,149,1200,139,1260,144C1320,149,1380,171,1410,181.3L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg> */}
            <div className="d-flex justify-content-center align-items-center" style={{height:"100%",width:"100%",}}>
                 <div className="mt-2" style={{height:"95%",width:"60%",padding:"40px",borderRadius:"15px",boxShadow:"5px 5px 10px #66BFBF",zIndex:1,border:"1px solid #66BFBF"}}>
              
                    <EditBlogForm data={Blog}/>
                 </div>
                 <img src={plant} alt="plant" style={{position:"absolute",height:"290px",top:-10,right:"10%",transform:"rotate(20deg)"}}/>
            </div>
            </>
            }
        </div>
    );
}
export default EditBlogs;