import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./WorkoutPlans.css";
import UserMenu from "./UserMenu";

const TraineeWorkoutPlans = () => {
  const [date, setDate] = useState(new Date()); // Calendar state
  const [selectedExercise, setSelectedExercise] = useState(null); // Modal state

  // Sample Exercise Data
  const exercises = Array.from({ length: 5 }).map((_, index) => ({
    id: index + 1,
    name: `Exercise Name ${index + 1}`,
    sets: "3 Sets",
    reps: "10 Reps",
    restTime: "30 sec",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" // Sample Video URL
  }));

  return (
    <div className="workout-plans-page">
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
      <div className="workout-main-content">
        <header className="workout-header">
          <h2>Today Workout Plan</h2>
          <UserMenu />
        </header>

        {/* Workout Plan Section */}
        <div className="workout-container">
          {/* Trainer Section */}
          <div className="workout-trainer-section">
            <div className="workout-trainer-image">👤</div>
            <div className="trainer-info">
              <h3>Trainer Name</h3>
              <p>Level: Beginner</p>
            </div>
          </div>

          {/* Calendar & Exercises */}
          <div className="workout-content">
            {/* React Calendar */}
            <div className="workout-calendar">
              <Calendar onChange={setDate} value={date} />
            </div>

            {/* Exercise Box - Scrollable */}
            <div className="workout-exercise-container">
              <h3>Exercises</h3>
              <div className="workout-exercise-list">
                {exercises.map((exercise) => (
                  <div 
                    className="workout-exercise-item" 
                    key={exercise.id} 
                    onClick={() => setSelectedExercise(exercise)}
                  >
                    <div className="workout-exercise-image"></div>
                    <div className="workout-exercise-info">
                      <p><strong>{exercise.name}</strong></p>
                      <p>{exercise.sets} & {exercise.reps}</p>
                      <p>{exercise.restTime}</p>
                    </div>
                  </div>
                ))}
                {/* Complete Button Inside Exercise Box */}
                <button className="workout-complete-btn">Complete</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Exercise Details */}
      {selectedExercise && (
        <div className="workout-modal">
          <div className="workout-modal-content">
            <span className="workout-close-btn" onClick={() => setSelectedExercise(null)}>×</span>
            <video controls>
              <source src={selectedExercise.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>{selectedExercise.name}</h3>
            <p>{selectedExercise.sets} & {selectedExercise.reps}</p>
            <p>{selectedExercise.restTime}</p>
            <button className="workout-modal-done-btn" onClick={() => setSelectedExercise(null)}>Done</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TraineeWorkoutPlans;
