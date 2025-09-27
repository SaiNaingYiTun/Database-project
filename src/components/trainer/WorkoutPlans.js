import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./WorkoutPlans.css";
import Modal from "./Modal";
import exerciseData from './exerciseData.json'; // Import mock data

const WorkoutPlans = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [editExercise, setEditExercise] = useState(null); // Track which exercise to edit

  const workoutPlans = [
    { name: "Chest (Beginner)", id: 1 },
    { name: "Back (Beginner)", id: 2 },
    { name: "Leg (Beginner)", id: 3 },
    { name: "Arm (Beginner)", id: 4 },
    { name: "Shoulder (Beginner)", id: 5 },
  ];

  const emojiMap = {
    Chest: "💪",
    Back: "🦍",
    Leg: "🦵",
    Arm: "🤲",
    Shoulder: "🤸‍♂️",
  };

  const openModal = (workout) => {
    setSelectedWorkout(workout);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWorkout(null);
    setEditExercise(null); // Close the edit modal
  };

  const openEditModal = (exercise) => {
    setEditExercise(exercise);
    setIsModalOpen(true);
  };

  const saveChanges = (updatedExercise) => {
    // Logic to save changes goes here
    console.log("Exercise updated:", updatedExercise);
    closeModal(); // Close the modal after saving changes
  };

  const deleteExercise = (exerciseId) => {
    // Logic to delete exercise goes here
    console.log("Exercise deleted:", exerciseId);
    closeModal(); // Close the modal after deletion
  };

  const getExercises = (workoutPlanId) => {
    const workoutPlan = exerciseData.workoutPlans.find(plan => plan.id === workoutPlanId);
    if (!workoutPlan) return [];
    return workoutPlan.exercises || [];
  };

  return (
    <div className="workout-plans">
      <div className="sidebar">
        <div className="logo">BUILD UP</div>
        <nav>
          <Link to="/trainer/WorkoutPlans"><button className="active">🏋️ Workout Plans</button></Link>
          <Link to="/trainer/ProgressCheck"><button>🏃 Progress Check</button></Link>
          <Link to="/trainer/Trainees"><button>👤 Trainees</button></Link>
          <Link to="/trainer/HomePage"><button>🏠 Home</button></Link>
        </nav>
        <div className="footer-buttons">
          <button className="logout">Log out</button>
          <button className="delete-account">Delete Account</button>
        </div>
      </div>

      <div className="main-content">
        <header>
          <h2>Beginner Trainer</h2>
          <span>Si Thu Naung</span>
        </header>

        <div className="workout-list">
          {workoutPlans.map((plan) => {
            const baseName = plan.name.split(" ")[0];
            const exercises = getExercises(plan.id);

            return (
              <div key={plan.id} className="workout-item">
                <div className="workout-info">
                  <span className="icon">{emojiMap[baseName] || "🏋️"}</span>
                  <h3>{plan.name}</h3>
                </div>

                <div className="exercise-list">
                  {exercises.length === 0 ? (
                    <p>No exercises available</p>
                  ) : (
                    exercises.map((exercise) => (
                      <div key={exercise.id} className="exercise-item">
                        <h4>{exercise.exerciseName}</h4>
                        <p>Sets & Reps: {exercise.setRep}</p>
                        <p>Rest Time: {exercise.restTime}</p>
                        <a href={exercise.videoUrl} target="_blank" rel="noopener noreferrer">
                          Watch Video
                        </a>
                        <div>
                        <button onClick={() => openEditModal(exercise)} className="edit-button">Edit</button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <button className="upload-video" onClick={() => openModal(plan)}>
                  Upload Video
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal for Upload or Edit */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title={editExercise ? `Edit Exercise for ${editExercise?.exerciseName}` : `Upload Video for ${selectedWorkout?.name}`}>
        <form className="modal-form">
          <div className="form-group">
            <label>Exercise Name</label>
            <input
              type="text"
              value={editExercise ? editExercise.exerciseName : ""}
              placeholder="Enter Exercise Name"
              onChange={(e) => setEditExercise({ ...editExercise, exerciseName: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Set & Rep</label>
            <input
              type="text"
              value={editExercise ? editExercise.setRep : ""}
              placeholder="Enter Set & Rep"
              onChange={(e) => setEditExercise({ ...editExercise, setRep: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Rest Time</label>
            <input
              type="text"
              value={editExercise ? editExercise.restTime : ""}
              placeholder="Enter Rest Time"
              onChange={(e) => setEditExercise({ ...editExercise, restTime: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Upload Video</label>
            <input type="file" />
          </div>

          <button type="button" onClick={() => saveChanges(editExercise)} className="submit-button">
            Save Changes
          </button>

          <button type="button" onClick={() => deleteExercise(editExercise.id)} className="submit-button">
            Delete
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default WorkoutPlans;
