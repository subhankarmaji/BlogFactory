import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ErrorPage from "./component/screens/ErrorPage";
import HomePage from "./component/screens/HomePage";
import pic from './component/assets/blogImage2.png'
import {RiAccountCircleFill } from 'react-icons/ri';
import { IconContext } from "react-icons";
import Menu from "./component/screens/Menu";
import Signup from "./component/screens/Signup";


function App() {
  return (
    <div className="row " style={{width:"100%"}}>
      <div className="col-md-2 mt-2">
        <div style={{ }}>
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
          <div className="mt-4">
            <Router>
            <Menu/>
            </Router>
          </div>
          <img src={pic} style={{height:"200px",width:"100%",marginTop:"30%"}}/>
        </div>

      </div>
      <div className="col-md-10" style={{backgroundColor:"#F9F2ED"}}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage/> } />
            <Route exact path="/signup" element={<Signup/> } />

            <Route exact path="*" element={<ErrorPage/>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
