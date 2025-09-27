import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./TrainerDetail.css"; // Ensure this file is imported

const TrainerDetail = () => {
  const { name } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const trainer = location.state;

  if (!trainer) return <p>Error: No trainer data available</p>;

  return (
    <div className="trainer-detail-container">
      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="back-button">⬅ Back</button>

      <div className="trainer-header">
        {/* Placeholder Trainer Image */}
        <div className="trainer-image"></div>

        <div className="trainer-info">
          <p><strong>Trainer Name:</strong> {trainer.name}</p>
          <p><strong>Trainer Type:</strong> {trainer.type}</p>
          <p><strong>Phone:</strong> {trainer.phone}</p>
          <p><strong>Email:</strong> {trainer.email}</p>
          <p><strong>Height:</strong> {trainer.height}</p>
          <p><strong>Weight:</strong> {trainer.weight}</p>
          <p><strong>Media:</strong>{trainer.media}</p>
          <p><strong>Certification/Experience:</strong> {trainer.certificateExperience}</p>
        </div>
      </div>

      {/* Bio Section */}
      

      {/* Buttons */}
      <div className="button-group">
        <button className="approve-button">Approve</button>
        <button className="reject-button">Reject</button>
      </div>
    </div>
  );
};

export default TrainerDetail;
