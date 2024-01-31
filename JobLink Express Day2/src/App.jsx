import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./pages/Home";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import PostJob from "./components/PostJob";
import Profile from "./components/Profile";
import Searchjob from "./components/Searchjob";
import AddProfile from "./components/AddProfile";
import DashBoard from "./components/DashBoard";
import AdminSidebar from "./components/AdminSidebar";
import UserDashboard from "./components/UserDashboard";
import ChangePassword from "./components/ChangePassword";
import AppliedJobs from "./components/AppliedJobs";
import ViewJobsAdmin from "./components/ViewJobsAdmin";
import ViewApplicants from "./components/ViewApplicants";
import ChangePasswordadmin from "./components/ChangePasswordadmin";
function App() {
  return (
    <>
 
    <Router>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/searchjob" element={<Searchjob/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/addprofile" element={<AddProfile/>}/>
        <Route path="/userdashboard" element={<UserDashboard/>}/>
        <Route path="/changepassword" element={<ChangePassword/>}/>
        <Route path="/adminsidebar" element={<AdminSidebar/>}/>
        <Route path="/postjob" element={<PostJob/>}/>
        <Route path="/appliedjobs" element={<AppliedJobs/>}/>
        <Route path="/viewjobsadmin" element={<ViewJobsAdmin/>}/>
        <Route path="/viewapplicants" element={<ViewApplicants/>}/>
        <Route path="/changepasswordadmin" element={<ChangePasswordadmin/>}/>
       
      
      </Routes>
     </Router>
    
    </>
  );
}

export default App
