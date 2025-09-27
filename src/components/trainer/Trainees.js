import React, { useState } from "react";
import ProfileModal from "./ProfileModal";
import { Link, useNavigate } from "react-router-dom";
import "./Trainees.css"; 

const Trainees = () => {
  const [selectedTrainee, setSelectedTrainee] = useState(null); // Store selected trainee for modal
  const navigate = useNavigate();

  const handleProfileClick = (trainee) => {
    setSelectedTrainee(trainee); // Show profile modal
  };

  const handleWorkoutPlanClick = (trainee) => {
    // Pass the entire trainee object to WorkoutAssign
    navigate(`/trainer/WorkoutAssign/${trainee.id}`, { state: { trainee } });
  };

  const handleMealPlanClick = (trainee) => {
    navigate(`/trainer/MealPlanAssign/${trainee.id}`, { state: { trainee } }); // Navigate to meal plan page
  };

  // Dummy trainee data
  const trainees = [
    { id: 1, name: "John Doe", type: "Beginner", phone: "123-456-7890", email: "john@example.com", media: "Instagram", weight: "70kg", height: "5'9" },
    { id: 2, name: "Jane Smith", type: "Intermediate", phone: "987-654-3210", email: "jane@example.com", media: "Facebook", weight: "65kg", height: "5'7" },
    { id: 3, name: "JoeTar", type: "Intermediate", phone: "987-654-3210", email: "jane@example.com", media: "Facebook", weight: "65kg", height: "5'3" },
  ];

  return (
    <div className="homepage">
      <div className="sidebar">
        <div className="logo">BUILD UP</div>
        <nav>
          <Link to="/trainer/WorkoutPlans">
            <button>🏋️ Workout Plans</button>
          </Link>
          <Link to="/trainer/ProgressCheck">
            <button>🏃 Progress Check</button>
          </Link>
          <Link to="/trainer/Trainees">
            <button className="active">👤 Trainees</button>
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

      <div className="main-content">
        <header>
          <h2>Trainees</h2>
          <span>Trainer Name</span>
        </header>

        <div className="trainee-cards">
          {trainees.map((trainee) => (
            <div key={trainee.id} className="progress-card">
              <div className="trainee-info">
                <div className="trainee-image" style={{ backgroundImage: `url(${trainee.imageUrl})` }}>
                  {!trainee.imageUrl && "Trainee Image"}
                </div>
                <span className="badge">{trainee.type}</span>
              </div>
              <div className="progress-actions">
                <button className="profile-btn" onClick={() => handleProfileClick(trainee)}>Profile</button>
                <button
                  className="workout-btn"
                  onClick={() => handleWorkoutPlanClick(trainee)} // Passing the entire trainee object here
                >
                  Workout Plan
                </button>
                <button
                  className="meal-btn"
                  onClick={() => handleMealPlanClick(trainee)} // Passing the trainee's id for meal plan
                >
                  Meal Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Profile Modal */}
        {selectedTrainee && <ProfileModal trainee={selectedTrainee} onClose={() => setSelectedTrainee(null)} />}
      </div>
    </div>
  );
};

export default Trainees;
