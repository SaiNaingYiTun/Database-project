import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./AccountDeletion.css";

const AccountDeletion = () => {
  const location = useLocation(); // Get the current URL path

  const getActiveClass = (path) => (location.pathname === path ? "active" : "");

  const trainers = [
    { 
        name: "Dustin", 
        phone: "0946737783", 
        email: "dustin@example.com", 
        type: "Intermediate", 
        height:"5'10",
        weight:"65kg",
        requestTime: "2:30", 
        media: "YouTube", 
        certificateExperience: "Basic Certification in Python" 
    },
    { 
        name: "Eleven", 
        phone: "0986738783", 
        email: "eleven@example.com", 
        type: "Advanced", 
        height:"5'8",
        weight:"60kg",
        requestTime: "7:50", 
        media: "LinkedIn", 
        certificateExperience: "Advanced AI Certification" 
    },
    { 
        name: "Max", 
        phone: "0947738883", 
        email: "max@example.com",
        height:"5'4",
        weight:"57kg", 
        type: "Advanced", 
        requestTime: "9:37", 
        media: "Instagram", 
        certificateExperience: "Full-Stack Web Development" 
    }
  ];

  return (
    <div className="account-deletion">
      <div className="sidebar">
        <div className="logo">🏋️‍♂️ BUILD UP</div>
        <nav>
          <Link to="/admin/VideoApprove">
            <button className={getActiveClass("/admin/VideoApprove")}>✅ Video Approve</button>
          </Link>
          <Link to="/admin/TrainersManagement">
            <button className={getActiveClass("/admin/TrainersManagement")}>👨‍🏫 Trainers Management</button>
          </Link>
          <Link to="/admin/UserManagement">
            <button className={getActiveClass("/admin/UserManagement")}>👥 Trainee Management</button>
          </Link>
          <Link to="/admin/TrainerQualification">
            <button className={getActiveClass("/admin/TrainerQualification")}>📜 Trainer Qualification</button>
          </Link>
          <Link to="/admin/AccountDeletion">
            <button className={getActiveClass("/admin/AccountDeletion")}>🗑️ Account Deletion</button>
          </Link>
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
                <p><strong>Type Of User:</strong> {trainer.type}</p>
                <p><strong>Requested Time:</strong> {trainer.requestTime}</p>
              </div>
              <Link to={`/admin/AccountDeletion/${trainer.name}`} state={trainer}>
                <button className="view-button">View</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountDeletion;
