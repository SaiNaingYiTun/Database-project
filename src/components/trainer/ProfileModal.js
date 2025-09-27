import React from "react";
import "./ProfileModal.css";
 
const ProfileModal = ({ trainee, onClose }) => {
  if (!trainee) return null; // If no trainee data, don't render
 
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <div className="profile-container">
          <div className="profile-image"> {/* Placeholder for Image */} </div>
          <div className="profile-details">
            <p><strong>Trainee Name:</strong> {trainee.name}</p>
            <p><strong>Trainee Type:</strong> {trainee.type}</p>
            <p><strong>Phone:</strong> {trainee.phone}</p>
            <p><strong>Email:</strong> {trainee.email}</p>
            <p><strong>Media:</strong> {trainee.media}</p>
            <p><strong>Weight:</strong> {trainee.weight}</p>
            <p><strong>Height:</strong> {trainee.height}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default ProfileModal;