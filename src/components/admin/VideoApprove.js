import React, { useState } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import "./VideoApprove.css";

const VideoApprove = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveClass = (path) => (location.pathname === path ? "active" : "");


  const [trainerRequests] = useState([
    { id: 1, category: "Chest (Beginner)", trainerName: "John Doe", requestedTime: "10:00 AM", exercise: "Bicep Curls", setRep: "3 x 12", restTime: "30s" },
    { id: 2, category: "Back (Intermediate)", trainerName: "Jane Smith", requestedTime: "11:30 AM", exercise: "Lat Pulldown", setRep: "4 x 10", restTime: "40s" },
    { id: 3, category: "Legs (Advanced)", trainerName: "Mike Johnson", requestedTime: "1:00 PM", exercise: "Squats", setRep: "5 x 8", restTime: "45s" },
]);

  return (
    <div className="video-approve">
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
          <h2>Trainer Requests</h2>
          <div className="admin-profile">
            <span>👤 Admin</span>
            <strong>Admin Name</strong>
          </div>
        </header>

        <div className="trainer-requests">
          {trainerRequests.length > 0 ? (
            trainerRequests.map((request) => (
              <div key={request.id} className="request-card">
                <button className="category">{request.category}</button>
                <div className="request-details">
                  <div className="trainer-photo"></div>
                  <div className="request-info">
                    <p><strong>Trainer Name:</strong> {request.trainerName}</p>
                    <p><strong>Requested Time:</strong> {request.requestedTime}</p>
                    <p><strong>Exercise:</strong> {request.exercise}</p>
                    <p><strong>Set & Rep:</strong> {request.setRep}</p>
                    <p><strong>Rest Time:</strong> {request.restTime}</p>
                  </div>
                  <button 
                    className="check-button"
                    onClick={() => navigate(`/admin/ExerciseDetail/${request.id}`, { state: request })}
                  >
                    Check
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No trainer requests available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoApprove;
