import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./HomePage.css";

const Homepage = () => {
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
            <button>🏃 Progress Check</button>
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
        {/* Header */}
        <header>
          <h2>Beginner Trainer</h2>
          <span>Si Thu Naung</span>
        </header>

        {/* Advertising Photo */}
        <div className="advertising-photo">
          <img
            src="/fitness.jpg"
            alt="Fitness Photo"
          />
        </div>

        {/* Additional Buttons */}
        <div className="additional-buttons">
          <button className="motivation">Motivation</button>
          <div className="contact-info">
            <p>Contact Information</p>
            <p>Office Location</p>
            <p>About Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
