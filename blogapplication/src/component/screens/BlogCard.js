import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import {GiCrownedHeart} from 'react-icons/gi';
import {FaArrowAltCircleRight} from 'react-icons/fa';
import { IconContext } from "react-icons";
import Modal from './Modal';
import blogImage1 from '../assets/blogImage1.png';
function BlogCard(props){

    const [openModal,setOpenModal] = useState(false);
    return(
        <div className='d-flex align-items-center' style={{height:"220px",width:"550px"}}>
            <div style={{height:"160px",width:"160px",borderRadius:"80px",backgroundColor:"#D6EFED",marginRight:"-75px",zIndex:1}}>
                {props.data.authorpic===null ?
                <img style={{height:"150px",width:"150px",borderRadius:"75px"}} src={blogImage1} />
                :
                <img style={{height:"150px",width:"150px",borderRadius:"75px"}} src={props.data.authorpic} />
                }
                
            </div>
            <div className='d-flex flex-column justify-content-center' style={{height:"220px",width:"475px",borderRadius:"30px",boxShadow:"5px 5px 10px #495C83",border:"2px solid #18978F",paddingLeft:"80px",lineHeight:0.8,position:"relative",paddingRight:"20px"}}>
                <div className='d-flex justify-content-center' style={{position:"absolute",top:"10%",right:20}}>
                    <IconContext.Provider value={{ style:{height:20,width:20,marginRight:5,color:"red"}}}>
                        <GiCrownedHeart/>
                    </IconContext.Provider>
                    <p className='mt-1'>{props.data.votes}</p>
                </div>
                <p style={{fontFamily:"Cormorant SC",fontSize:"30px",fontWeight:"bold",color:"#0D7377"}}>{props.data.title?props.data.title:<Loader/>}</p>
                <p style={{fontFamily:"Edu NSW ACT Foundation",fontSize:"20px",fontWeight:"bold",color:"#54BAB9"}}>{props.data.desc}</p>
                <p className='d-flex justify-content-end ' style={{fontFamily:"Edu NSW ACT Foundation",fontSize:"20px",fontWeight:"bold",color:"#0F4C75"}}>~{props.data.author}</p>
                <div className='d-flex justify-content-between ' >
                <button type="button" className="btn btn-outline-success" onClick={()=>{setOpenModal(true)}}>
                    Explore
                    <IconContext.Provider value={{ style:{height:20,width:20,marginLeft:5,color:"green"}}}>
                        <FaArrowAltCircleRight/>
                    </IconContext.Provider>
                </button>
                {openModal && <Modal closeModal={setOpenModal} data={props.data}/> }
                
                <p style={{fontFamily:"Arima",fontSize:"20px"}}>{props.data.dateofpublish}</p>
                </div>
            </div>
            
        </div>
    );
}
export default BlogCard;