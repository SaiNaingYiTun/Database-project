import React, { useState } from "react";  // Ensure useState is imported
import { Link, useNavigate } from "react-router-dom";
import "./ProgressCheck.css";
import ProfileModal from "./ProfileModal";

const ProgressCheck = () => {
  const navigate = useNavigate();
  const [selectedTrainee, setSelectedTrainee] = useState(null);  // Manage the selected trainee for modal

  const handleProgressClick = (id) => {
    navigate(`/trainer/ProgressDetail/${id}`); // Navigate to the detailed progress page
  };

  const handleProfileClick = (trainee) => {
    setSelectedTrainee(trainee);  // Set the selected trainee to show the modal
  };

  // Dummy trainee data
  const trainees = [
    { id: 1, name: "John Doe", type: "Beginner", phone: "123-456-7890", email: "john@example.com", media: "Instagram", weight: "70kg", height: "5'9" },
    { id: 2, name: "Jane Smith", type: "Intermediate", phone: "987-654-3210", email: "jane@example.com", media: "Facebook", weight: "65kg", height: "5'7" },
    { id: 3, name: "JoeTar", type: "Intermediate", phone: "987-654-3210", email: "jane@example.com", media: "Facebook", weight: "65kg", height: "5'3" },
  ];

  return (
    <div className="homepage">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">BUILD UP</div>
        <nav>
          <Link to="/trainer/WorkoutPlans">
            <button>🏋️ Workout Plans</button>
          </Link>
          {/* <Link to="/trainer/MealPlans">
            <button>🍱 Meal Plans</button>
          </Link> */}
          <Link to="/trainer/ProgressCheck">
            <button className="active">🏃 Progress Check</button>
          </Link>
          <Link to="/trainer/Trainees">
            <button>👤 Trainees</button>
          </Link>
          <Link to="/trainer/HomePage">
            <button>🏠 Home</button>
          </Link>
        </nav>
        <div className="footer-buttons">
          <button className="logout">Log out</button>
          <button className="delete-account">Delete Account</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header>
          <h2>Beginner Trainer</h2>
          <span>Trainer Name</span>
        </header>

        {/* Progress Cards */}
        <div className="progress-cards">
          {trainees.map((trainee) => (
            <div key={trainee.id} className="progress-card square-box">
              <div className="trainee-info">
                <div className="trainee-image">Trainee Image</div>
                <span className="badge">{trainee.type}</span>
              </div>
              <div className="progress-actions">
                <button className="profile-btn" onClick={() => handleProfileClick(trainee)}>Profile</button>
                <button
                  className="progress-btn"
                  onClick={() => handleProgressClick(trainee.id)}
                >
                  Progress Check
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Modal */}
      {selectedTrainee && <ProfileModal trainee={selectedTrainee} onClose={() => setSelectedTrainee(null)} />}
    </div>
  );
};

export default ProgressCheck;
