import React, { useState } from "react";
import "../assets/css/Login.css";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
function Login() {

    const[userName,setUserName]=useState("");
    const[password,setPassword]=useState("");
    const [Checkrole, setCheckRole] = useState('');
    const [Error, setError] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        // if (userName.trim() === '' || pass.trim() === '') {
        //     setError('Please fill out all fields');
        //     return;
        // }
        localStorage.setItem('name', userName);
        localStorage.setItem('pass', password);
        dispatch(setRole(userName, password, Checkrole));
        setUserName('');
        setPass('');
        setCheckRole('');
        setOpenModal(false);
    }
    console.log(userName);
    return ( <>
   
    <div className="parent">
         <div className="sign">
            <center><div className="login"><h1 className="lo">Welcome</h1></div></center>
            <div className="fo">
                <center>
            <TextField id="standard-basic" label="Email" variant="standard" value={userName} onChange={(e) => setUserName(e.target.value)}/>
            <br></br>
            <div className="pass">
            <TextField id="standard-basic" label="Password" variant="standard" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="but">
<div className="but1">
      
      <button className="but2" onClick={handleSubmit}><Link to="/">Sign in</Link></button>
</div>
<Link to="/signup" className="link-button">
					    Create a new Account
				    </Link>
</div>
            </center>
            </div>
            
         </div>
    </div>
    </> );
}

export default Login;