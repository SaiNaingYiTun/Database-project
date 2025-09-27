import React from "react";
import "./Modal.css"; // Import the styles

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✖</button>
        {title && <h2 className="modal-title">{title}</h2>}
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
