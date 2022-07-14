import React from "react";

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

    return(
        <div>
            <div className="list-group list-group-flush ">
                <IconContext.Provider value={{ style:{height:20,width:20,marginRight:10}}}>
                    <a  href="/" className="list-group-item list-group-item-action " style={{borderRadius:"20px"}}  >
                            <IoIosHome/>
                        Home
                    </a>
                </IconContext.Provider>
                <IconContext.Provider value={{ style:{height:20,width:20,marginRight:10}}}>
                    <a href="/hr" className="list-group-item list-group-item-action"style={{borderRadius:"20px"}} >
                            <GoPencil/>
                        Write blog
                    </a>
                </IconContext.Provider>
                <IconContext.Provider value={{ style:{height:20,width:20,marginRight:10}}}>
                    <a href="/hr" className="list-group-item list-group-item-action"style={{borderRadius:"20px"}} >
                            <GiOpenBook/>
                        View Blogs
                    </a>
                </IconContext.Provider>
                <IconContext.Provider value={{ style:{height:20,width:20,marginRight:10}}}>
                    <a href="#" className="list-group-item list-group-item-action"style={{borderRadius:"20px"}} >
                            <GoSignIn/>
                        Sign in
                    </a>
                </IconContext.Provider>
                <IconContext.Provider value={{ style:{height:20,width:20,marginRight:10}}}>
                    <a href="#" className="list-group-item list-group-item-action"style={{borderRadius:"20px"}} >
                            <IoIosPersonAdd/>
                        Sign Up
                    </a>
                </IconContext.Provider>
            </div>
            <div className="list-group list-group-flush mt-3" >
                <IconContext.Provider value={{ style:{height:20,width:20,marginRight:10}}}>
                    <a href="#" className="list-group-item list-group-item-action"style={{borderRadius:"20px"}} >
                            <IoIosMail/>
                        Contact
                    </a>
                </IconContext.Provider>
                <IconContext.Provider value={{ style:{height:20,width:20,marginRight:10}}}>
                    <a href="#" className="list-group-item list-group-item-action"style={{borderRadius:"20px"}} >
                            <BsInfoLg/>
                        about
                    </a>
                </IconContext.Provider>
            </div>
        </div>

    );
}
export default Menu;