import React, { useState } from "react";
import '../styles/Modal.css';
import Loader from "./Loader";
import {GiCrownedHeart} from 'react-icons/gi';
import { IconContext } from "react-icons";
function Modal(props){
    const [active,setActive] = useState(false);
    return(
        <div style={{position:"fixed",height:"100vh",width:"100%",top:0,left:0,zIndex:2}}>
            <div style={{position:"fixed",height:"100vh",width:"100%",top:0,left:0,backgroundColor:"#F9F2ED",opacity:0.9,}}></div>
            <div className="modalScroll" style={{height:"90%",width:"40%",position:"absolute",top:"5%",left:"30%",backgroundColor:"white",boxShadow:"5px 5px 10px #7D9D9C",borderRadius:"10px",overflowY:"scroll",padding:"10px"}}>
                <div className="d-flex justify-content-between align-items-center" >
                    <img style={{height:"100px",width:"100px",borderRadius:"50px"}} src={props.data.authorpic} alt="writer"/>
                    <div style={{marginLeft:"10px"}}>
                        <p  style={{fontFamily:"Cormorant SC",fontSize:"40px",fontWeight:"bold",color:"#0D7377"}}>{props.data.title?props.data.title:<Loader/>}</p>
                        <p className="text-center"  style={{fontFamily:"Edu NSW ACT Foundation",fontSize:"22px",fontWeight:"bold",color:"#0F4C75"}}>{props.data.author}</p>
                    </div>
                    <div style={{color: active? "red" : "#D4E2D4"}} onClick={()=>{setActive(!active)}}>
                        <IconContext.Provider value={{ style:{height:40,width:40}}}>
                            <GiCrownedHeart/>
                        </IconContext.Provider>
                    </div>

                </div>
                <p style={{fontFamily:"Arima",fontSize:"20px",marginTop:"10px"}}>{props.data.dateofpublish}</p>
                <p style={{fontSize:"20px",lineHeight:1.2}}>{props.data.content}</p>
                <div className="d-flex justify-content-around">
                <button type="button"className="btn btn-outline-info">Edit</button>
                <button type="button"className="btn btn-outline-danger">Delete</button>
                <button type="button" onClick={()=>{props.closeModal(false)}} className="btn btn-outline-warning">Close</button>
                </div>
            </div>

        </div>
    );
}export default Modal;