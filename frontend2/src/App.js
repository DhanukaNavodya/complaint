
// import React from 'react';
// import { Route, Routes } from "react-router";
// import ReactFragement from 'react';



// function App() {
//   return (
//       <div>
//         <ComplaintManagement/>
//         <AddComplaint/>
//         <DeleteComplaint/>
//         <EditComplaint/>
//         <ComplaintList/>
//         <ReactFragement>
//           <Routes>
           
//           </Routes>
//         </ReactFragement>
 
//         
   
//        </div>

//   );
// };

// export default App;

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
      </Routes>
      </React.Fragment>
    </Router>

    <h1>Complaint Management System</h1>
    </div>
  );
}

export default App;
