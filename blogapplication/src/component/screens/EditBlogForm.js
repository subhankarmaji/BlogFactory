import React, { useEffect, useState } from 'react';
import { Formik, Form} from 'formik';
import {TextBar,Textarea} from './TextBar';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import base_url from '../api/Bootapi';
import axios from 'axios';
function EditBlogForm(props){

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
    axios.put(`${base_url}/editBlog`,data).then(
      (response)=>{
        console.log(response.data);
          toast.success('Your blog edited successfully',{autoClose: 2000});
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
        id:props.data.id,
        title: props.data.title,
        description: props.data.desc,
        content:props.data.content,
        uid:props.data.authorid,
        dateofpublish: props.data.dateofpublish,
      }}
      validationSchema={validate}
      onSubmit={values => {
      values.dateofpublish = formatDate(new Date());
        console.log(values);
        sendData(values);
        localStorage.removeItem("Blog");
      }}
    >
      {formik => (
        <div>
          <h1 className='mt-1'style={{fontWeight:"bold",textShadow:"5px 5px 4px #fff"}} >Edit Blog</h1>
          <Form>
          
            <TextBar id="title" label="title" name="title" type="text" style={{width:"60%"}} />
            <TextBar id="description" label="description" name="description" type="text" style={{width:"80%"}} />
            <Textarea style={{height:"300px",fontSize:"18px"}} id="content" label="content" name="content" type="text" />
            <button id="registerbutton" className="btn btn-success mt-3" type="submit">Save Changes</button>
            
            <button id="resetbutton" className="btn btn-danger mt-3 ml-3"style={{marginLeft:15}} type="reset">Reset</button>
          </Form>

        </div>
      )}
    </Formik>
    </>
  )
} 
export default EditBlogForm;
