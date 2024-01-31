import React from "react";
import "../assets/css/Navbar.css";
import { Link } from "react-router-dom";

import logo from "../assets/images/naukri_Logo.png";
function Navbar() {
    return ( 
    <>
    <div className="header">
        
        <div className="img"><img src={logo} height={25}></img></div>
       <div className="one">
             <Link to="/"><h3>Home</h3></Link>
        </div>
       <div className="one"><Link to="/searchjob"><h3>Jobs</h3></Link></div>
       <div className="one"><h3>Contact</h3></div>
       <div className="lr">  
        <button className="but3">
            <Link to="/login">Login</Link>
        </button>  
    <button className="but4"><Link to="/signup">Register</Link></button>
    </div>
    {/* <div className="dr">
    <Dropdown/>
   
    </div> */}
    </div>
    
    </>
     );
}

export default Navbar;