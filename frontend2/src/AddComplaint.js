import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./AddComplaint.css";
import Nav from './Nav';

const AddComplaint = () => {
  const [complaintid, setComplaintId] = useState('');
  const [serviceName, setServiceName] = useState('');
  const [serviceProvider, setServiceProvider] = useState('');
  const [date, setDate] = useState(new Date().toISOString());
  const [location, setLocation] = useState('');
  const [bookingId, setBookingId] = useState('');
  const [complaintCategory, setComplaintCategory] = useState('');
  const [urgencyLevel, setUrgencyLevel] = useState('');
  const [error, setError] = useState('');

  // Generate Complaint ID on component mount
  useEffect(() => {
    setComplaintId(`C-${Date.now()}`); // Unique ID based on timestamp
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!serviceName) {
      setError('Service Name is required!');
      return;
    }

    const complaintData = {
      complaintid,
      serviceName,
      serviceProvider,
      date,
      location,
      bookingId,
      complaintCategory,
      urgencyLevel
    };

    try {
      await axios.post('http://localhost:3000/complaints', complaintData, {
        headers: { 'Content-Type': 'application/json' }
      });

      alert('Complaint submitted successfully!');

      // Reset form except complaintid
      setServiceName('');
      setServiceProvider('');
      setDate(new Date().toISOString());
      setLocation('');
      setBookingId('');
      setComplaintCategory('');
      setUrgencyLevel('');
      setError('');
    } catch (error) {
      console.error('Error submitting complaint:', error);
      alert('Failed to submit complaint. Please try again.');
    }
  };

  return (
    <div>
      <Nav />
      <h2>Add Complaint</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <fieldset>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Complaint ID:</label>
            <input type="text" value={complaintid} readOnly />
          </div>

          <div>
            <label>Service Name:</label>
            <select value={serviceName} onChange={(e) => setServiceName(e.target.value)} required>
              <option value="">Select Service</option>
              <option value="cleaning">Cleaning</option>
              <option value="painting">Painting</option>
              <option value="plumbing">Plumbing</option>
              <option value="electrical">Electrical</option>
              <option value="repairing">Repairing</option>
            </select>
          </div>

          <div>
            <label>Service Provider:</label>
            <select value={serviceProvider} onChange={(e) => setServiceProvider(e.target.value)}>
              <option value="">Select Provider</option>
              <option value="provider1">Provider 1</option>
              <option value="provider2">Provider 2</option>
              <option value="provider3">Provider 3</option>
            </select>
          </div>

          <div>
            <label>Date & Time:</label>
            <input type="text" value={new Date(date).toLocaleString()} onChange={(e) => setDate(e.target.value)} readOnly />
          </div>
          

          <div>
            <label>Location:</label>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
          </div>

          <div>
            <label>Booking ID:</label>
            <input type="text" value={bookingId} onChange={(e) => setBookingId(e.target.value)} required />
          </div>

          <div>
            <label>Complaint Category:</label>
            <select value={complaintCategory} onChange={(e) => setComplaintCategory(e.target.value)} required>
              <option value="">Select Category</option>
              <option value="booking issues">Booking Issues</option>
              <option value="payment issues">Payment Issues</option>
              <option value="service quality issues">Service Quality Issues</option>
              <option value="notification error issues">Notification Error Issues</option>
              <option value="technical issues">Technical Issues</option>
              <option value="other issues">Other Issues</option>
            </select>
          </div>

          <div>
            <label>Urgency Level:</label>
            <select value={urgencyLevel} onChange={(e) => setUrgencyLevel(e.target.value)} required>
              <option value="">Select Urgency</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
          </div>

          <div>
            <button type="submit">Submit Complaint</button>
            <button type="button">Edit Complaint</button>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default AddComplaint;
