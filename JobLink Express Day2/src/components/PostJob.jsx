import React, { Component } from 'react';
import AdminSidebar from './AdminSidebar';
import "../assets/css/PostJob.css";
function PostJob() {
    return ( <>
        <AdminSidebar/>
        <div className='prof'>
        <h1 className='ver23a'>Post A New Job</h1>
           <h3 className='ver45a'>Home / Dashboard / PostJob</h3>
           <div className='proform1po'>
               <div className='proform11'>
               <h3 className='ver23aa'>Basic Info</h3>
               </div>
               <div className='proform1cc'>
           <div class="formgroupcp">
                    <label class="text-dark">Job Title</label>
                    <input type="text" class="form-control" placeholder="Title" required=""/>
                    </div>
                    <div className='tearea1'>
               <div class="formgroupcd">
                    <label class="text-dark">Job Description</label>
                    <textarea type="number" class="form-controll" placeholder="description" required=""/>
                    </div>
               </div>
           </div>
               <div className='prof11'>
                   <div className='prof1112'>
                   <div class="form-group">
                    <label class="text-dark">Email Address</label>
                    <input type="text" class="form-control" placeholder="Email" required=""/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Specialisms</label>
                    <input type="text" class="form-control" placeholder="Web Design" required=""/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Job Type</label>
                    <input type="text" class="form-control" placeholder="Full Time" required=""/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Qualification</label>
                    <input type="textr" class="form-control" placeholder="Graduation" required=""/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Excepted Salary</label>
                    <input type="text" class="form-control" placeholder="0" required=""/>
                    </div>
                   </div>
                   <div className='prof1113'>
                   <div class="form-group">
                    <label class="text-dark">Username</label>
                    <input type="text" class="form-control" placeholder="User" required=""/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Industry</label>
                    <input type="text" class="form-control" placeholder="IT & Software" required=""/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Career Level</label>
                    <input type="text" class="form-control" placeholder="Beginner" required=""/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Experience</label>
                    <input type="text" class="form-control" placeholder="4 years" required=""/>
                    </div>
                   <div class="form-group">
                    <label class="text-dark">Gender</label>
                    <input type="text" class="form-control" placeholder="Male" required=""/>
                    </div>
                   </div>
               </div>
               
           </div>
        </div>
    </> );
}

export default PostJob;