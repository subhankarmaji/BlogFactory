import React, { useEffect, useState } from "react";
import '../styles/Modal.css';
import Loader from "./Loader";
import {GiCrownedHeart} from 'react-icons/gi';
import { IconContext } from "react-icons";
import base_url from "../api/Bootapi";
import axios from "axios";
import blogImage1 from '../assets/blogImage1.png';
function Modal(props){
    const[user,setUser]=useState(null);
    const[allvoter,setAllVoter] = useState([]);
    const [active,setActive] = useState(false);
    const [owner,setOwner] = useState(false);
    const doVote=()=>{
      let vote={'bid':props.data.id,'userid':user.id};
      axios.post(`${base_url}/doVote`,vote).then(
        (response)=>{
            console.log(response);
        },(error)=>{
            console.log(error);
        }
      )

    }
    const checkOwner=()=>{
        if(user.name===props.data.author) setOwner(true);
    }
    useEffect(()=>{
        if(localStorage.getItem("user")===null) window.location.replace("/Login");
        setUser(JSON.parse(localStorage.getItem("user")));
        setAllVoter(props.data.voters);
        allvoter.forEach(element => {
            if(element.userid===user.id) setActive(true);
        });
        
        setTimeout(() => {  checkOwner(); }, 2000);
    },[allvoter]);

    return(
        <div style={{position:"fixed",height:"100vh",width:"100%",top:0,left:0,zIndex:2}}>
            <div style={{position:"fixed",height:"100vh",width:"100%",top:0,left:0,backgroundColor:"#F9F2ED",opacity:0.9,}}></div>
            <div className="modalScroll" style={{height:"90%",width:"40%",position:"absolute",top:"5%",left:"30%",backgroundColor:"white",boxShadow:"5px 5px 10px #7D9D9C",borderRadius:"10px",overflowY:"scroll",padding:"10px"}}>
                <div className="d-flex justify-content-between align-items-center" >
                    {props.data.authorpic===null ?
                    <img style={{height:"100px",width:"100px",borderRadius:"50px"}} src={blogImage1} alt="writer"/>
                    :
                    <img style={{height:"100px",width:"100px",borderRadius:"50px"}} src={props.data.authorpic} alt="writer"/>
                    }
                    <div style={{marginLeft:"10px"}}>
                        <p  style={{fontFamily:"Cormorant SC",fontSize:"40px",fontWeight:"bold",color:"#0D7377"}}>{props.data.title?props.data.title:<Loader/>}</p>
                        <p className="text-center"  style={{fontFamily:"Edu NSW ACT Foundation",fontSize:"22px",fontWeight:"bold",color:"#0F4C75"}}>{props.data.author}</p>
                    </div>
                    <div style={{color: active? "red" : "#D4E2D4"}} onClick={()=>{setActive(!active);doVote()}}>
                        <IconContext.Provider value={{ style:{height:40,width:40}}}>
                            <GiCrownedHeart/>
                        </IconContext.Provider>
                    </div>

                </div>
                <p style={{fontFamily:"Arima",fontSize:"20px",marginTop:"10px"}}>{props.data.dateofpublish}</p>
                <p style={{fontSize:"20px",lineHeight:1.2}}>{props.data.content}</p>
                {owner?
                <div className="d-flex justify-content-around">
                <button type="button"className="btn btn-outline-info">Edit</button>
                <button type="button"className="btn btn-outline-danger">Delete</button>

                <button type="button" onClick={()=>{props.closeModal(false);window.location.reload();}} className="btn btn-outline-warning">Close</button>
                </div>
                :
                <div className="d-flex justify-content-around">

                <button type="button" onClick={()=>{props.closeModal(false);window.location.reload();}} className="btn btn-outline-warning">Close</button>
                </div>
                }
            </div>

        </div>
    );
}export default Modal;