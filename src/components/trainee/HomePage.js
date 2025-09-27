import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import UserMenu from "./UserMenu"; // ✅ Import UserMenu component

const TraineeHomePage = () => {
  return (
    <div className="homepage">
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

      <div className="main-content">
        <header>
          <h2>Welcome, Trainee!</h2>
          <UserMenu />  {/* ✅ Added the UserMenu here */}
        </header>

        <div className="advertising-photo">
          <img src="/fitness.jpg" alt="Fitness" />
        </div>

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

export default TraineeHomePage;