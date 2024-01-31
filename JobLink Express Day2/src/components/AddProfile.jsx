import React, { Component } from 'react';
import Sidebar from './Sidebar1';
import "../assets/css/AddProfile.css";
function AddProfile() {
    return ( <>
        <Sidebar/>
        <div className='prof'>
        <h1 className='ver23a'>My Profile</h1>
           <h3 className='ver45a'>Home / Dashboard / My Profile</h3>
           <div className='proform1'>
               <div className='proform11'>
               <h3 className='ver23aa'>Basic Info</h3>
               </div>
               <div className='prof11'>
                   <div className='prof111'>

                   </div>
                   <div className='prof112'>
                   <div class="form-group">
                    <label class="text-dark">First Name</label>
                    <input type="text" class="form-control" placeholder=" Hari" required=""/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Last Name</label>
                    <input type="text" class="form-control" placeholder=" Prasad" required=""/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Phone number</label>
                    <input type="number" class="form-control" placeholder=" 91 9874872" required=""/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Age</label>
                    <input type="number" class="form-control" placeholder=" 21" required=""/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Language</label>
                    <input type="text" class="form-control" placeholder="Tamil English" required=""/>
                    </div>
                   </div>
                   <div className='prof113'>
                   <div class="form-group">
                    <label class="text-dark">Middle Name</label>
                    <input type="text" class="form-control" placeholder="Optional" required=""/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Job Title</label>
                    <input type="text" class="form-control" placeholder="Developer" required=""/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Expected Salary</label>
                    <input type="number" class="form-control" placeholder="600000" required=""/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Experience in Years</label>
                    <input type="number" class="form-control" placeholder="4" required=""/>
                    </div>
                   </div>
               </div>
               <div className='tearea'>
               <div class="form-group">
                    <label class="text-dark">Tell About Yourself</label>
                    <textarea type="number" class="form-controll" placeholder="e.x about your skills and Educational details" required=""/>
                    </div>
               </div>
           </div>
        </div>
    </> );
}

export default AddProfile;