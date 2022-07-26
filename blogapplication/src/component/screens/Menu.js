import React, { useEffect, useState } from "react";

import {IoIosHome} from 'react-icons/io';
import {IoIosMail} from 'react-icons/io';
import {GoSignIn} from 'react-icons/go';
import {GoPencil} from 'react-icons/go';
import {GiOpenBook} from 'react-icons/gi';
import {BsInfoLg} from 'react-icons/bs';
import {IoIosPersonAdd} from 'react-icons/io';
import { IconContext } from "react-icons";
import '../styles/Menu.css';



function Menu(){

    const [view,setView] = useState(window.location.pathname);
    useEffect(()=>{
        if(document.getElementById(view) !=null) (document.getElementById(view)).classList.add("view");
    },[]);

    return(
        <div>
            <div className="list-group list-group-flush ">
                    <div id="/" className="list-group-item list-group-item-action " style={{borderRadius:"20px"}} onClick={()=>window.location.replace('/')} >
                        <IconContext.Provider value={{ style:{height:20,width:20,marginRight:10}}}>
                            <IoIosHome/>
                        Home
                        </IconContext.Provider>
                    </div>
                    <div id="/writeBlog" className="list-group-item list-group-item-action mt-1"style={{borderRadius:"20px"}} onClick={()=>{window.location.replace('/writeBlog');}} >
                        <IconContext.Provider value={{ style:{height:20,width:20,marginRight:10}}}>
                            <GoPencil/>
                        Write blog
                        </IconContext.Provider>
                    </div>
                    <div id="/viewBlogs" className="list-group-item list-group-item-action mt-1"style={{borderRadius:"20px"}} onClick={()=>{window.location.replace('/viewBlogs');}}>
                        <IconContext.Provider value={{ style:{height:20,width:20,marginRight:10}}}>
                            <GiOpenBook/>
                        View Blogs
                        </IconContext.Provider>
                    </div>
                    <div id="/Login" className="list-group-item list-group-item-action mt-1"style={{borderRadius:"20px"}}onClick={()=>{window.location.replace('/Login');}} >
                         <IconContext.Provider value={{ style:{height:20,width:20,marginRight:10}}}>
                            <GoSignIn/>
                        Sign in
                        </IconContext.Provider>
                    </div>
                    <div id="/signup" className="list-group-item list-group-item-action mt-1"style={{borderRadius:"20px"}} onClick={()=>{window.location.replace('/signup');}}>
                        <IconContext.Provider value={{ style:{height:20,width:20,marginRight:10}}}>
                            <IoIosPersonAdd/>
                        Sign Up
                        </IconContext.Provider>
                    </div>
            </div>
            <div className="list-group list-group-flush mt-3" >
                    <div id="/contact" className="list-group-item list-group-item-action"style={{borderRadius:"20px"}} onClick={()=>{window.location.replace('/contact');}} >
                        <IconContext.Provider value={{ style:{height:20,width:20,marginRight:10}}}>
                            <IoIosMail/>
                        Contact
                        </IconContext.Provider>
                    </div>
                    <div id="/about" className="list-group-item list-group-item-action mt-1"style={{borderRadius:"20px"}} onClick={()=>{window.location.replace('/about');}}>
                        <IconContext.Provider value={{ style:{height:20,width:20,marginRight:10}}}>
                            <BsInfoLg/>
                        about
                        </IconContext.Provider>
                    </div>
            </div>
        </div>

    );
}
export default Menu;