import React from "react";
import "./PriceModal.css";

const PriceModal = ({ trainer, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>{trainer.name}</h2>
        <div className="trainer-details">
          <div className="trainer-image-placeholder"></div>
          <div className="trainer-info">
            <p><strong>Trainer Type:</strong> {trainer.type}</p>
            <p><strong>Phone:</strong> {trainer.phone}</p>
            <p><strong>Email:</strong> {trainer.email}</p>
            <p><strong>Media:</strong> {trainer.media}</p>
            <p><strong>Bio:</strong></p>
            <textarea readOnly>{trainer.bio}</textarea>
            <button className="train-button">Train: {trainer.price}/Month</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceModal;
