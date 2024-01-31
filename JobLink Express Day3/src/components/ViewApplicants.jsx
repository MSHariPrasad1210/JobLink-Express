import React from "react";
import AdminSidebar from "./AdminSidebar";
import "../assets/css/ViewApplicants.css";
import cog from "../assets/images/cog.gif";
import rupee from "../assets/images/expe.png";
import loc from "../assets/images/location.png";
import year from "../assets/images/year.png";
function ViewApplicants() {
    return ( <>
    <AdminSidebar />
         <div className='prof'>
              
         <h1 className='ver23a'>View Applicants</h1>
           <h3 className='ver45a'>Home / Dashboard / ViewApplicants</h3>
           <div className="cht11">
             <div className="detd">

             <h1 className='erdt'>Hari</h1>
             <h1 className='erdt1'>Java developer</h1>
             <div className='infop'>
                    <div className='infop11'><div><img src={year} height={"100%"} /></div><div className='vr45'><h3 className='vr45a'>Web Designer</h3></div></div>
                    <div className='infop1'><div><img src={rupee} height={"80%"} /></div><div className='vr45'><h3 className='pvr45'>Work Experiences</h3></div></div>
                    <div className='infop1'><div><img src={loc} height={"100%"} /></div><div className='vr45'><h3 className='vr45a'>Coimbatore</h3></div></div>
                    
                </div>
             </div>
             <div className="detdi">
             </div>
           </div>
         </div>
    </>
    );
    }
    export default ViewApplicants;