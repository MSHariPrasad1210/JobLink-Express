import React, { Component } from 'react';
import "../assets/css/Userdashboard.css";
import Sidebar from './Sidebar1';
import log from "../assets/images/log.png";
function UserDashboard() {
   const tableData = [
      { no: 1, companyName: 'ABC Corp', jobRole: 'Software Engineer', status: 'Pending', appliedDate: '2024-02-01' },
      { no: 2, companyName: 'XYZ Ltd', jobRole: 'UX Designer', status: 'Approved', appliedDate: '2024-02-05' },
      { no: 3, companyName: 'Google', jobRole: 'UX Designer', status: 'Pending', appliedDate: '2024-02-05' },
      { no: 4, companyName: 'Drop box', jobRole: 'UX Designer', status: 'Rejected', appliedDate: '2024-02-05' },
      { no: 5, companyName: 'Zomato', jobRole: 'UX Designer', status: 'Rejected', appliedDate: '2024-02-05' },
      { no: 6, companyName: 'Netflix', jobRole: 'UX Designer', status: 'Rejected', appliedDate: '2024-02-05' },
      // Add more data as needed
    ];
    return ( <>
         <Sidebar />
         <div className='userdash1'>
         <h1 className='userver23'>Welcome to Dashboard</h1>
           <h3 className='userver45'>Home / Project Dashboard</h3>
            <div className='userdash11'>
               <div className='userdash111'>
               <h5 style={{size:"1vh"}} className='h55' >TOTAL APPLIED</h5>
                  <h3 className='h33'>10</h3>
               </div>
               <div className='userdash111'>
               <h5 style={{size:"1vh"}} className='h55' >TOTAL APPROVED</h5>
                  <h3 className='h33'>4</h3>
               </div>
               <div className='userdash111'>
               <h5 style={{size:"1vh"}} className='h55' >TOTAL REJECTED</h5>
                  <h3 className='h33'>6</h3>
               </div>
            </div>
            <div className='udi'>
               <h1 className='appu'>Applications</h1>
            <table className='tb'>
        <thead>
          <tr>
            <th className='hea'>No</th>
            <th className='hea'>Company Name</th>
            <th className='hea'>Job Role</th>
            <th className='hea'>Status</th>
            <th className='hea'>Applied Date</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.no}>
              <td>{row.no}</td>
              <td>{row.companyName}</td>
              <td>{row.jobRole}</td>
              <td status={row.status}>{row.status}</td>
              <td>{row.appliedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
            </div>
         </div>
    </> );
}

export default UserDashboard;