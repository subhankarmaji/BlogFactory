import React, { useState,useEffect } from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ErrorPage from "./component/screens/ErrorPage";
import HomePage from "./component/screens/HomePage";
import pic from './component/assets/blogImage2.gif'
import {RiAccountCircleFill } from 'react-icons/ri';
import { IconContext } from "react-icons";
import Menu from "./component/screens/Menu";
import Signup from "./component/screens/Signup";
import Login from "./component/screens/Login";

function App() {
  useEffect(()=>{
  
    
    setUser(JSON.parse(localStorage.getItem("user")));
    
    },[]);
    const [user,setUser] = useState(null);
  return (
    <div className="row " style={{width:"100%"}}>
      <div className="col-md-2 mt-2">
        <div style={{ }}>
          {user==null?
          <div className="d-flex justify-content-between">
            <div >
              <IconContext.Provider value={{ style:{height:60,width:60,}}}>
                <RiAccountCircleFill/>
              </IconContext.Provider>
            </div>
            <div className="d-flex flex-column justify-content-center" style={{lineHeight:0.8}}>
              <h5 style={{}}>Hi There,</h5>
              <p >Don't have an account yet?</p>
              <h6><a href="/signup" style={{textDecoration:"none"}}>Get Started</a></h6>
            </div>
          </div>
          :
          <div className="d-flex align-items-center flex-wrap">
            <div >
              {user.userimg==null?
              <IconContext.Provider value={{ style:{height:90,width:90,}}}>
                <RiAccountCircleFill/>
              </IconContext.Provider>
              :
              <img src={user.userimg} alt="user" style={{height:90,width:90,borderRadius:45}}/>
              }   
            </div>
            <div className="d-flex flex-column justify-content-center" style={{marginLeft:"20px"}}>
              <h5 style={{}}>Hi! {user.name},</h5>
              <h6 >{user.username}</h6>
              <button onClick={()=>{localStorage.removeItem("user"); window.location.replace('/')}} type="button" class="btn btn-outline-warning">Logout</button>
            </div>
          </div>

          }
          <div className="mt-4">
            <nav>
            <Menu/>
            </nav>
          </div>
          <img src={pic} style={{height:"250px",width:"100%",marginTop:"10%"}}/>
        </div>

      </div>
      <div className="col-md-10" style={{backgroundColor:"#F9F2ED"}}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage/> } />

            <Route exact path="/Login" element={<Login/> } />
            <Route exact path="/signup" element={<Signup/> } />
            <Route exact path="*" element={<ErrorPage/>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
