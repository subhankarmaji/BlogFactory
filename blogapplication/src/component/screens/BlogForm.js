import React, { useEffect, useState } from 'react';
import { Formik, Form} from 'formik';
import {TextBar,Textarea} from './TextBar';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import base_url from '../api/Bootapi';
import axios from 'axios';
function BlogForm(){
    useEffect(()=>{
        if(localStorage.getItem("user")===null) window.location.replace("/Login");
        setUser(JSON.parse(localStorage.getItem("user")));
    },[]);
    const [user,setUser] = useState(null);
    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
      }
      
      function formatDate(date) {
        return [
          padTo2Digits(date.getDate()),
          padTo2Digits(date.getMonth() + 1),
          date.getFullYear(),
        ].join('-');
      }
      
  const validate = Yup.object({
    
    title: Yup.string()
      .max(30, 'Must be 30 characters or less')
      .required('Title is Required'),

    description:Yup.string()
      .max(100,'should be 100 characters or less')
      .required('Description is Required'),

    content: Yup.string()
      .required('Content is required'),

  })
  const sendData=(data)=>{
    axios.post(`${base_url}/addblog`,data).then(
      (response)=>{
        console.log(response.data);
          toast.success('Your blog is live now',{autoClose: 2000});
          setTimeout(() => {  window.location.replace('/viewBlogs'); }, 2000);

      
      },(error)=>{
        toast.error('Something went Wrong Try again!!',{autoClose: 2000});

      }
    )
  }
  return (
    
    <>
    <ToastContainer/>
    <Formik
      initialValues={{
        
        title: '',
        description: '',
        content:'',
        uid:'',
        dateofpublish: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
      values.dateofpublish = formatDate(new Date());
        values.uid = user.id;
        sendData(values);
      }}
    >
      {formik => (
        <div>
          <h1 className='mt-1'style={{fontWeight:"bold"}} >Write Blog</h1>
          <Form>
          
            <TextBar id="title" label="title" name="title" type="text" style={{width:"60%"}} />
            <TextBar id="description" label="description" name="description" type="text" style={{width:"80%"}} />
            <Textarea style={{height:"300px",fontSize:"18px"}} id="content" label="content" name="content" type="text" />
            <button id="registerbutton" className="btn btn-outline-success mt-3" type="submit">Submit blog</button>
            
            <button id="resetbutton" className="btn btn-outline-danger mt-3 ml-3"style={{marginLeft:15}} type="reset">Reset</button>
          </Form>

        </div>
      )}
    </Formik>
    </>
  )
} 
export default BlogForm;
