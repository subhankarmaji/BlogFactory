import React, { useEffect, useState } from "react";
import axios from "axios";
import {base_url} from "../api/Bootapi";
import Loader from "./Loader";
import { Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import BlogCard from "./BlogCard";
function ViewBlogs(){
    const [allblogs, setAllblogs] = useState([]);
    const fetchBlogs=()=>{
        axios.get(`${base_url}/getallblogs`).then(
            (res)=>{
                setAllblogs(res.data);
            },(error)=>{
                console.log(error);
                <Loader/>
            }
        )
    }
    useEffect(()=>{
        fetchBlogs();
        localStorage.removeItem("Blog");
    },[]);

    const [filter,setFilter] = useState("");

  const SearchText = (event) =>{
    setFilter(event.target.value);
  }

    return(
        <div style={{height:"90vh",width:"100%"}}>
             <Container className='text-center mt-4' style={{width:"40%",height:"5%"}}>
                <Form.Control  id="searchbar" placeholder="Enter title or name of author or date" value = {filter} onChange={SearchText.bind(this)} />

            </Container>
            <div className="d-flex flex-wrap justify-content-around mt-4 " style={{height:"95%",width:"100%",overflow:"scroll",overflowX:"hidden"}} >
                {allblogs.filter(
                    (blogs)=>{
                        if(filter===""){
                            console.log(blogs);
                            return blogs;
                        }
                        else if(blogs.title.toLowerCase().includes(filter.toLowerCase())
                         || blogs.author.toLowerCase().includes(filter.toLowerCase())
                         ||blogs.dateofpublish.includes(filter)
                        ){
                            console.log(blogs)
                            return blogs;
                        }

                    }
                ).map((item,key)=>{
                    return (
                        <div key={key}style={{marginBottom:"20px"}}>
                         <BlogCard data={item}/>
                        </div>
                    )
                })

                }
            </div>
        </div>
    );
}
export default ViewBlogs;