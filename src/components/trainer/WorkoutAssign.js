import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './WorkoutAssign.css';
import { useLocation, useNavigate } from 'react-router-dom';

const WorkoutAssign = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { trainee } = location.state || {}; // Retrieve the trainee data passed from Trainees.js

  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  // Handle upload video button click
  const handleUploadVideoClick = () => {
    // Passing trainee data along with the navigation
    navigate("/trainer/WorkoutAssignDetail", { state: { trainee } }); 
  };
   

  return (
    <div className="workout-assign-container">
      {/* Trainee Info Section */}
      <div className="trainee-info">
        {trainee ? (
          <>
            <h3>{trainee.name}</h3>
            <p>Level: {trainee.type}</p>
          </>
        ) : (
          <p>No trainee selected</p>
        )}
      </div>

      {/* Main Content Section */}
      <div className="content-section">
        {/* Calendar Section */}
        <div className="calendar-section">
          <h4>Calendar</h4>
          <div className="calendar-box">
            <Calendar
              onChange={handleDateChange}
              value={date}
              className="react-calendar"
            />
          </div>
        </div>

        {/* Exercises Section */}
        <div className="exercises-section">
          <h4>Exercises</h4>
          <button className="upload-video-btn" onClick={handleUploadVideoClick}>
            Upload Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutAssign;
