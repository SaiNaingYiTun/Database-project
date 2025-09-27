import React from "react";
import "./ImageModal.css"; // ✅ Renamed Import

const ImageModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✖</button>
        <h2>Upload Your Transformation</h2>

        <label>Height</label>
        <input type="text" placeholder="Enter your height" />

        <label>Weight</label>
        <input type="text" placeholder="Enter your weight" />

        <label>Upload Photo</label>
        <input type="file" />

        <button className="modal-button" onClick={onClose}>Done</button>
      </div>
    </div>
  );
};

export default ImageModal;
