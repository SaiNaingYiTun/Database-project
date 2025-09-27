import React from "react";
import "./TrainerModal.css";

const TrainerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>My Trainer</h2>
        <div className="trainer-container">
          <div className="profile-pic">
            <div className="image-placeholder"></div>
          </div>
          <div className="trainer-info">
            <p><strong>Trainer Name:</strong> <span>John Doe</span></p>
            <p><strong>Trainer Type:</strong> <span>Fitness Coach</span></p>
            <p><strong>Phone:</strong> <span>+123456789</span></p>
            <p><strong>Email:</strong> <span>trainer@example.com</span></p>
            <p><strong>Media:</strong> <span>Instagram</span></p>
            <p><strong>Certification/Work Experience:</strong> <span>10 years</span></p>
          </div>
        </div>
        <div className="bio-section">
          <h3>Bio</h3>
          <textarea placeholder="Trainer's bio here..."></textarea>
        </div>
      </div>
    </div>
  );
};

export default TrainerModal;
