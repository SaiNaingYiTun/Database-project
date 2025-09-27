import React from "react";
import "./AccountModal.css";

const AccountModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>My Account</h2>
        
        <div className="profile-pic">
          <div className="image-placeholder"></div>
        </div>
        
        <div className="account-form">
          <label>User Name:</label>
          <input type="text" placeholder="Enter your name" />

          <label>Phone:</label>
          <input type="text" placeholder="Enter your phone" />

          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />

          <label>Height:</label>
          <input type="text" placeholder="Enter your height" />

          <label>Weight:</label>
          <input type="text" placeholder="Enter your weight" />

          <label>Media:</label>
          <input type="text" placeholder="Enter media link" />
        </div>

        <div className="buttons">
          <button className="edit-btn">Edit</button>
          <button className="save-btn">Save Change</button>
        </div>
      </div>
    </div>
  );
};

export default AccountModal;
