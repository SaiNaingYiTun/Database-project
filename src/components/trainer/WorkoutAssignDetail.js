import React, { useState, useEffect } from "react";
import exerciseData from "./exerciseData.json"; // Assuming exerciseData.json is in the same directory
import { useNavigate, useLocation } from "react-router-dom";
import "./WorkoutAssignDetail.css"; // Add any necessary styles

const WorkoutAssignDetail = () => {
  const { trainee } = useLocation().state || {}; // Retrieve the trainee data passed from WorkoutAssign
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  const [selectedExercises, setSelectedExercises] = useState([]);

  const navigate = useNavigate();

  // Handle button click for selecting a workout plan
  const handlePlanSelect = (planId) => {
    setSelectedPlanId(planId);
    const selectedPlan = exerciseData.workoutPlans.find((plan) => plan.id === planId);
    if (selectedPlan) {
      setSelectedExercises(selectedPlan.exercises);
    }
  };

  return (
    <div className="workout-assign-detail-container">
      <h2>{trainee ? `${trainee.name} - ${trainee.type}` : "Select a Trainee"}</h2>

      {/* Workout Plan Buttons */}
      <div className="workout-assign-buttons-container">
        {exerciseData.workoutPlans.map((plan) => (
          <button
            key={plan.id}
            onClick={() => handlePlanSelect(plan.id)}
            className="workout-assign-button"
          >
            {plan.name}
          </button>
        ))}
      </div>

      {/* Exercises for the selected workout plan */}
      {selectedPlanId && (
        <div className="workout-assign-exercise-list">
          <h3>Exercises for {exerciseData.workoutPlans.find((plan) => plan.id === selectedPlanId)?.name}</h3>
          {selectedExercises.map((exercise) => (
            <div key={exercise.exerciseId} className="workout-assign-exercise-item">
              <h4>{exercise.exerciseName}</h4>
              <p>Set & Rep: {exercise.setRep}</p>
              <p>Rest Time: {exercise.restTime}</p>
              <button>Upload Video</button> {/* Later you can add logic for uploading videos */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkoutAssignDetail;
