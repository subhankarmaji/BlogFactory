import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_savwvy6', 'template_83nmfit', form.current, 'gJNTPRZ18Bv2yffHb')
      .then((result) => {
          console.log(result.text);
          toast.success('Email sent we will connect you if needed',{autoClose: 2000});
          setTimeout(() => {  window.location.replace('/viewBlogs'); }, 2000);
      }, (error) => {
          console.log(error.text);
          toast.error('Something went Wrong Try again!!',{autoClose: 2000});
      });
  };

  return (
    <>
    <ToastContainer/>

        <div >
            <h1 style={{fontWeight:"bold",textShadow:"5px 5px 4px #fff"}} >Contact us</h1>
            <form ref={form} onSubmit={sendEmail}>
                <label for="Name" style={{fontSize:17}}>Name</label>
                <input className='form-control shadow-none' id="Name" label="Name" name="user_name" type="text" required />
                <label for="Email" style={{fontSize:17}}>Email</label>
                <input className='form-control shadow-none' id="Email" label="Email" name="user_email" type="email" required/>
                <label for="Message" style={{fontSize:17}}>Message</label>
                <textarea className='form-control shadow-none' style={{height:"110px",fontSize:"17px"}} id="Message" label="Message" name="message" type="text" required />
                <button id="submit" className="btn btn-dark mt-3" type="submit" value="send">Send</button>
                
                <button id="resetbutton" className="btn btn-danger mt-3 ml-3"style={{marginLeft:15}} type="reset">Reset</button>
            </form>
        </div>

        </>
  );
};