import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div>
        <ul className="complaintmng">
            <li className="ComplaintManagement">
                <Link to="/complaintlist" className="active complaintmanagement">
                <h1>Complaint List</h1>
                </Link>
            </li>
            <li className="ComplaintManagement">
            <Link to="/addcomplaint" className="active complaintmanagement">
                <h1>Add Complaint</h1>
                </Link>
            </li>
            <li className="ComplaintManagement">
            <Link to="/deletecomplaint" className="active complaintmanagement">
                <h1>Delete Complaint</h1>
                </Link>
            </li>
            <li className="ComplaintManagement">
            <Link to="/editcomplaint" className="active complaintmanagement">
                <h1>Edit Complaint</h1>
                </Link>
            </li>
            <li className="ComplaintManagement">
            <Link to="/showcomplaints" className="active complaintmanagement">
                <h1>Show complaints</h1>
                </Link>
            </li>
            <li className="ComplaintManagement">
            <Link to="/ShowAllComplaints" className="active complaintmanagement">
                <h1>Show All complaints</h1>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav