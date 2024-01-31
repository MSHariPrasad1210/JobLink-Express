import React, { Component } from 'react';
import AdminSidebar from './AdminSidebar';
import cog from "../assets/images/cog.gif";
import rupee from "../assets/images/Rupee.png";
import loc from "../assets/images/location.png";
import year from "../assets/images/year.png";
import "../assets/css/ViewJobsAdmin.css";
function ViewJobsAdmin() {
    return ( <>
         <AdminSidebar />
         <div className='prof'>
         <h1 className='ver23a'>Jobs Added By You</h1>
           <h3 className='ver45a'>Home / Dashboard / JobsAdded</h3>
           <div className='jobcard'>
              <img src={cog}></img>
              <div className='ingc'>
                <h2 className='ver23'>Cognizant</h2>
                <div className='infop'>
                    <div className='infop11'><div><img src={year} height={"100%"} /></div><div className='vr45'><h3 className='vr45a'>0-1 yrs</h3></div></div>
                    <div className='infop1'><div><img src={rupee} height={"80%"} /></div><div className='vr45'><h3 className='vr45aaa'>Not disclosed</h3></div></div>
                    <div className='infop1'><div><img src={loc} height={"100%"} /></div><div className='vr45'><h3 className='vr45a'>Remote</h3></div></div>
                    
                </div>
                <h3 className='verr45a'>Should have 3-5 years of experience in PHP development.</h3>
              <center><button className="but2">Apply</button></center>
              </div>
           </div>
         </div>
    </> );
}

export default ViewJobsAdmin;