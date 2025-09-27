import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProgressDetail.css"; // Ensure you're using the updated styles

const ProgressDetail = () => {
  const { id } = useParams();  // Get the trainee ID from the URL
  const navigate = useNavigate();

  // Dummy trainee data (this could be replaced with API data)
  const trainees = [
    { id: 1, name: "John Doe", type: "Beginner", phone: "123-456-7890", email: "john@example.com", media: "Instagram", weight: "70kg", height: "5'9", imageUrl: "https://via.placeholder.com/80" },
    { id: 2, name: "Jane Smith", type: "Intermediate", phone: "987-654-3210", email: "jane@example.com", media: "Facebook", weight: "65kg", height: "5'7", imageUrl: "https://via.placeholder.com/80" },
    { id: 3, name: "JoeTar", type: "Intermediate", phone: "987-654-3210", email: "jane@example.com", media: "Facebook", weight: "65kg", height: "5'3" },
  ];

  // Find the trainee based on the `id` from the URL
  const trainee = trainees.find((t) => t.id === parseInt(id));

  if (!trainee) {
    return <div>Trainee not found</div>;  // Display a message if no trainee matches the ID
  }

  return (
    <div className="progress-page">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>

      {/* Header Section */}
      <div className="progress-header">
        <div className="profile-image">
          <img src={trainee.imageUrl} alt="User Icon" />  {/* Display trainee's image */}
        </div>
        <div className="trainee-info">
          <h2 className="trainee-name">{trainee.name}</h2>  {/* Display trainee's name */}
          <p className="trainee-level">Level : {trainee.type}</p>  {/* Display trainee's level */}
        </div>
      </div>

      {/* Progress Card */}
      <div className="progress-card">
        <div className="progress-image">
          <span className="progress-badge">{trainee.type}</span>
          <div className="user-image">User Image</div>
        </div>
        <div className="progress-details">
          <p><strong>Weight :</strong> {trainee.weight}</p>  {/* Display weight */}
          <p><strong>Height :</strong> {trainee.height}</p>  {/* Display height */}
          <p><strong>Uploaded Date :</strong> --</p>  {/* Placeholder for upload date */}
        </div>
      </div>
    </div>
  );
};

export default ProgressDetail;
