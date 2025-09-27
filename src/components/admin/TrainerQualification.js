import React from "react";
import { Link } from "react-router-dom";
import "./TrainerQualification.css";

const TrainerQualification = () => {
  const trainers = [
    { 
        name: "Dustin", 
        phone: "0946737783", 
        email: "dustin@example.com", 
        type: "Intermediate", 
        height:"5'8",
        weight:"60kg",
        requestTime: "2:30", 
        media: "YouTube", 
        certificateExperience: "Basic Certification in Python" 
    },
    { 
        name: "Eleven", 
        phone: "0986738783", 
        email: "eleven@example.com", 
        type: "Advanced", 
        requestTime: "7:50",
        height:"5'11",
        weight:"77kg", 
        media: "LinkedIn", 
        certificateExperience: "Advanced AI Certification" 
    },
    { 
        name: "Max", 
        phone: "0947738883", 
        email: "max@example.com", 
        type: "Advanced", 
        height:"5'7",
        weight:"60kg",
        requestTime: "9:37", 
        media: "Instagram", 
        certificateExperience: "Full-Stack Web Development" 
    }
  ];

  return (
    <div className="trainer-qualification">
      <div className="sidebar">
        <div className="logo">🏋️‍♂️ BUILD UP</div>
        <nav>
          <Link to="/admin/VideoApprove"><button>✅ Video Approve</button></Link>
          <Link to="/admin/TrainersManagement"><button>👨‍🏫 Trainers Management</button></Link>
          <Link to="/admin/UserManagement"><button>👥 Trainee Management</button></Link>
          <Link to="/admin/TrainerQualification"><button className="active">📜 Trainer Qualification</button></Link>
          <Link to="/admin/AccountDeletion"><button>🗑️ Account Deletion</button></Link>
        </nav>
        <div className="footer-buttons">
          <button className="logout">Log out</button>
        </div>
      </div>

      <div className="main-content">
        <header>
          <div className="admin-profile">
            <span>👤 Admin</span>
            <strong>Admin Name</strong>
          </div>
        </header>

        <div className="trainer-list">
          {trainers.map((trainer, index) => (
            <div key={index} className="trainer-card">
              <div className="trainer-image" />
              <div className="trainer-info">
                <p><strong>Trainer Name:</strong> {trainer.name}</p>
                <p><strong>Trainer Type:</strong> {trainer.type}</p>
                <p><strong>Requested Time:</strong> {trainer.requestTime}</p>
              </div>
              {/* Link to the detailed trainer view */}
              <Link to={`/admin/TrainerQualification/${trainer.name}`} state={trainer}>
                <button className="view-button">View</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainerQualification;
