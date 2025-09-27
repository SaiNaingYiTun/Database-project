import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Trainer.css";

const TrainersManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation(); // Get current URL for active sidebar buttons

  const getActiveClass = (path) => (location.pathname === path ? "active" : "");

  const trainers = [
    { name: "Matt Roberts", email: "matt23@gmail.com", phone: "081- xxxxx", type: "Intermediate", media: "", assignedUsers: "2/3" },
    { name: "John Doe", email: "john.doe@gmail.com", phone: "082- yyyyy", type: "Advanced", media: "", assignedUsers: "1/5" }
  ];

  const filteredTrainers = trainers.filter(trainer =>
    trainer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trainer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trainer.phone.includes(searchQuery)
  );

  return (
    <div className="trainer-management">
      {/* Sidebar */}
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

      {/* Main Content */}
      <div className="main-content">
        <header>
          <h2>Trainers</h2>
          <div className="admin-profile">
            <span>👤 Admin</span>
            <strong>Admin Name</strong>
          </div>
        </header>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍 Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Trainer Table */}
        <table className="trainer-table">
          <thead>
            <tr>
              <th>Trainer Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Trainer Type</th>
              <th>Media</th>
              <th>Assigned Users</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTrainers.map((trainer, index) => (
              <tr key={index}>
                <td>{trainer.name}</td>
                <td>{trainer.email}</td>
                <td>{trainer.phone}</td>
                <td>{trainer.type}</td>
                <td>{trainer.media || "-"}</td>
                <td>{trainer.assignedUsers}</td>
                <td>
                  <button className="view-btn">View</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrainersManagement;
