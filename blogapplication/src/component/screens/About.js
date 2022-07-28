import React from "react";
import signboard from '../assets/signboard.png';
import info from './PersonalInfo';
import flower3 from '../assets/flower3.png';
function About(){
    return(
        <>
        <div className="d-flex justify-content-between align-items-center flex-wrap" style={{height:"100%",width:"100%"}}>
            <img src={signboard} alt="signboard" style={{height:"55%"}}/>
            <div className="d-flex justify-content-between" style={{height:"95%",width:"55%",backgroundColor:"transparent",marginRight:"5%",zIndex:1,border:"1px solid #61481C",borderRadius:"15px"}}>
                <div className="d-flex flex-column align-items-center" style={{height:"100%",width:"36%",backgroundColor:"#E6B325",borderTopLeftRadius:"15px",borderBottomLeftRadius:"15px",}}>
                    <div className="d-flex flex-column align-items-center" style={{height:"32%",backgroundColor:"#0F3D3E",width:"100%",borderTopLeftRadius:"15px",}}>
                    
                        <img src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profileimage" style={{height:"150px",width:"150px",borderRadius:"75px",marginTop:"10px"}}/>
                        <h4 style={{color:"#E6B325"}}>{info.name}</h4>
                        <p style={{color:"#E6B325",marginTop:"-5px"}}>{info.profession}</p>
                    </div>
                    <div className="d-flex flex-column align-items-center mt-2">
                        <h5 >Contact me</h5>
                        <b>Phone</b>
                        <p>{info.contact.phone}</p>
                        <b>Email</b>
                        <p>{info.contact.Email}</p>
                        <b>Website</b>
                        <p style={{cursor:"pointer"}} onClick={()=>{window.open("https://subhankarmaji.github.io/","_blank")}}>{info.contact.portfolioweb}</p>
                    </div>
                    <img src={flower3} style={{height:"240px"}}/>
                </div>
                <div className="d-flex flex-column align-items-center mt-2" style={{height:"100%",width:"64%"}}>

                    {/* education section */}

                    <h5 style={{borderBottom:"2px solid #E6B325",paddingBottom:"5px",fontWeight:"bold",color:"#E6B325"}} >Education</h5>
                    <b >{info.Education[3].name}</b>
                    <p>{info.Education[3].School}</p>
                    <p style={{marginTop:"-15px"}}>{`${info.Education[3].Board}( ${info.Education[3].Percentage} )`}</p>
                    <b >{info.Education[2].name}</b>
                    <p>{info.Education[2].School}</p>
                    <p style={{marginTop:"-15px"}}>{`${info.Education[2].Board}( ${info.Education[2].Percentage} )`}</p>

                    {/* project section */}

                    <h5 style={{borderBottom:"2px solid #E6B325",paddingBottom:"5px",fontWeight:"bold",color:"#E6B325"}} >Projects</h5>
                    <b >{info.Projects[1].name}</b>
                    <p style={{cursor:"pointer"}} onClick={()=>{window.open("https://subhankarmaji.github.io/","_blank")}}>{info.Projects[1].link}</p>
                    <b >{info.Projects[2].name}</b>
                    <p style={{cursor:"pointer"}} onClick={()=>{window.open("https://github.com/iamneo-production/c665121a-1dde-4cd9-8227-f66b6b6d4f0f.git","_blank")}}>{info.Projects[2].link}</p>
                    <b >{info.Projects[3].name}</b>
                    <p style={{cursor:"pointer"}} onClick={()=>{window.open("https://github.com/subhankarmaji/BlogFactory.git","_blank")}}>{info.Projects[3].link}</p>


                    {/* Achivement section*/}

                    <h5 style={{borderBottom:"2px solid #E6B325",paddingBottom:"5px",fontWeight:"bold",color:"#E6B325"}} >Achivement</h5>
                    <p>{info.Achivement[1]}</p>


                    {/* Experience section */}
                    <h5 style={{borderBottom:"2px solid #E6B325",paddingBottom:"5px",fontWeight:"bold",color:"#E6B325"}} >Experience</h5>
                    <p>{info.Experience[1]}</p>

                </div>
            </div>
        </div>
        <div style={{marginTop:"-22.1%"}}>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3CCF4E" fill-opacity="1" d="M0,32L48,37.3C96,43,192,53,288,85.3C384,117,480,171,576,186.7C672,203,768,181,864,176C960,171,1056,181,1152,208C1248,235,1344,277,1392,298.7L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
        </>
    );
}export default About;