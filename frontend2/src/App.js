import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ComplaintManagement from "./ComplaintManagement";
import AddComplaint from './AddComplaint';
import DeleteComplaint from './DeleteComplaint';
import EditComplaint from './EditComplaint';
import ComplaintList from './ComplaintList';
import ShowComplaints from './showComplaint'
import ShowAllComplaints from './showAllComplaints';
import ComplaintById from "./complaintById";
import User from  './User';
import UserList from './UserList';
function App() {
  return (
    <div>
    <Router>
      <React.Fragment>
      <Routes>
            <Route path="/" element={<ComplaintManagement/>}/> 
            <Route path="/maincomplaintmng" element={<ComplaintManagement/>}/>
            <Route path="/addcomplaint" element={<AddComplaint/>}/>
            <Route path="/deletecomplaint" element={<DeleteComplaint/>}/>
            <Route path="/complaintlist/:id" element={<EditComplaint/>}/>
            <Route path="/complaintlist" element={<ComplaintList/>}/>
            <Route path="/showcomplaints" element={<ShowComplaints/>}/>
            <Route path="/ShowAllComplaints" element={<ShowAllComplaints/>}/>
            <Route path="/ShowAllComplaints/:id" element={<ComplaintById/>}/>
            <Route path="/addUser" element={<User/>}/>
            <Route path="/userList" element={<UserList/>}/>
      </Routes>
      </React.Fragment>
    </Router>

    <h1>Complaint Management System</h1>
    </div>
  );
}

export default App;


