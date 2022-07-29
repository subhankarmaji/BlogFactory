import React, { useEffect, useState } from "react";
import blogger from '../assets/blogger.gif';
import {FcIdea} from 'react-icons/fc';
import {BsCheckCircleFill} from 'react-icons/bs';
import { IconContext } from "react-icons";
import BlogCard from "./BlogCard";
import Typewriter from 'typewriter-effect';
import axios from "axios";
import {base_url} from "../api/Bootapi";


function HomePage(){
    const getBlogOftheDay=()=>{
        axios.get(`${base_url}/blogOfTheDay`).then(
          (response)=>{
            setBlogOftheDay(response.data);
          
          },(error)=>{
            console.log(error);
          }
        )
      }
    useEffect(()=>{
        // setTimeout(() => { setBlogOftheDay (data);  }, 2000);
        getBlogOftheDay();
        console.log(blogOftheDay);
        },[]);
    const [blogOftheDay,setBlogOftheDay] = useState([null]);
    return (
        <div>
            <div className="d-flex justify-content-around flex-wrap ">
                <div>

                {/* <h1 className="mt-4" style={{fontFamily:"Arima",fontSize:"70px",fontWeight:"bold", marginLeft:"40px",color:"#3F4E4F"}} >Welcome Bloggers</h1> */}
                <div className="mt-4" style={{fontFamily:"Arima",fontSize:"70px",fontWeight:"bold", marginLeft:"40px",color:"#3F4E4F"}}>
                    <Typewriter
                    onInit={(text)=>{
                        text
                        .typeString("Hello Bloggers!")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Welcome to BlogFactory")
                        .start();
                    }}
                    />
                </div>
                <p style={{fontSize:"20px"}}>“Don't focus on having a great blog. Focus on producing a blog that's great for your readers.”</p> 
                <p className="d-flex justify-content-end" style={{fontSize:"20px"}}>~ Brian Clark</p> 

                </div>
                <div className="mt-4 d-flex justify-content-center align-items-center" style={{backgroundColor:"white" ,height:"250px",width:"250px", borderRadius:"500px 30px 80px 70px",}}>
                    <img src={blogger} style={{height:"220px",width:"300px",borderRadius:"100px",boxShadow:"2px 2px 5px #66BFBF"}}/>
                </div>
            </div>
            <div className="d-flex justify-content-around flex-wrap">
                <div style={{height:"400px",width:"50%",backgroundColor:"white",borderRadius:"10px 150px"}}>
                    <div className="d-flex justify-content-center mt-3">
                        <IconContext.Provider value={{ style:{height:20,width:20,marginRight:10}}}>
                            <FcIdea/>
                        </IconContext.Provider>
                        <h4 style={{fontFamily:"Arima"}}>Blog Of The Day</h4>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                    <BlogCard
                        data={blogOftheDay}
                    />
                    </div>
                </div>
                <div  style={{marginTop:"10%"}}>
                    <div className="d-flex">
                        <IconContext.Provider value={{ style:{height:20,width:20,marginRight:15,color:"green"}}}>
                            <BsCheckCircleFill/>
                        </IconContext.Provider>
                        <p>Write Quality Blogs</p>
                    </div>
                    <div className="d-flex">
                        <IconContext.Provider value={{ style:{height:20,width:20,marginRight:15,color:"green"}}}>
                            <BsCheckCircleFill/>
                        </IconContext.Provider>
                        <p>Read Blogs of Your Interest</p>
                    </div>
                    <div className="d-flex">
                        <IconContext.Provider value={{ style:{height:20,width:20,marginRight:15,color:"green"}}}>
                            <BsCheckCircleFill/>
                        </IconContext.Provider>
                        <p>Give your valuable opinion by voting and unvoting</p>
                    </div>
                    <div className="d-flex">
                        <IconContext.Provider value={{ style:{height:20,width:20,marginRight:15,color:"green"}}}>
                            <BsCheckCircleFill/>
                        </IconContext.Provider>
                        <p>Be the Face of Our Website By Getting More Votes from readers</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
export default HomePage;