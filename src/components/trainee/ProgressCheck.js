import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProgressCheck.css";
import UserMenu from "./UserMenu";
import ImageModal from "./ImageModal"; // ✅ Renamed Import

const TraineeProgressCheck = () => {
  const [showModal, setShowModal] = useState(false); // ✅ State to manage modal visibility

  return (
    <div className="progress-check-page">
      <div className="homepage">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="logo">BUILD UP</div>
          <nav>
            <Link to="/trainee/WorkoutPlans"><button>🏋️ Workout Plans</button></Link>
            <Link to="/trainee/MealPlans"><button>🍱 Meal Plans</button></Link>
            <Link to="/trainee/ProgressCheck"><button>📊 Progress Check</button></Link>
            <Link to="/trainee/TraineeTrainers"><button>🏅 Trainers</button></Link>
            <Link to="/trainee/HomePage"><button>🏠 Home</button></Link>
          </nav>
          <div className="footer-buttons">
            <button className="logout">Log out</button>
            <button className="delete-account">Delete Account</button>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <header>
            <h2>Your Progress</h2> 
            <UserMenu />
          </header>

          <div className="progress-content">
            {/* <h3>Your Progress</h3> */}
            <p><strong>Level: Beginner</strong></p>

            <h4>Upload Your Monthly Progress</h4>
            <div className="progress-table">
              <div className="table-cell">
                <p>Beginner</p>
                <button onClick={() => setShowModal(true)}>Upload Image</button>
              </div>
              <div className="table-cell">
                <p>Beginner</p>
                <button onClick={() => setShowModal(true)}>Upload Image</button>
              </div>
              <div className="table-cell">
                <p>Beginner</p>
                <button onClick={() => setShowModal(true)}>Upload Image</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Render ImageModal When showModal is True */}
      {showModal && <ImageModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default TraineeProgressCheck;
