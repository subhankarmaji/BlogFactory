import React from 'react';
import { Formik, Form} from 'formik';
import {TextBar} from './TextBar';
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import base_url from '../api/Bootapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
function LoginForm(){
  const validate = Yup.object({
    
    email: Yup.string()
      .required('Email is required'),
    password: Yup.string()
      
      .required('Password is required'),
  })
  const sendData=(data)=>{
    axios.post(`${base_url}/login`,data).then(res=>{
        console.log(res);
      localStorage.setItem("user",JSON.stringify(res.data));
      toast.success('Welcome user',{autoClose: 2000});
      setTimeout(() => {  window.location.replace('/'); }, 2000);
    }).catch(err=>{
      console.log(err);
      toast.error('Invalid Credentials',{autoClose: 2000});
    })
  }
  return (
    <>
    <ToastContainer/>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values);
        sendData(values);
      }}
    >
      {formik => (
        <div>
          <h1 className='mt-4'style={{fontWeight:"bold"}} >Login</h1>
          <Form>
          
            <TextBar id="email" label="email" name="email" type="text" />
            <TextBar id="password" label="password" name="password" type="password" />
            <span className="">
                  New User
                  <nav>
                    <Link id="registerlink" to="/signup"><h4 style={{color:'black'}}>Signup</h4></Link>
                  </nav>
                </span>
            <button id="loginbutton" className="btn btn-dark mt-3" type="submit">Login</button>
            <button id="resetbutton" className="btn btn-danger mt-3 ml-3"style={{marginLeft:15}} type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
    </>
  )
} 
export default LoginForm;
