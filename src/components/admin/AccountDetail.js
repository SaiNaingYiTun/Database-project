import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./AccountDetail.css"; // Ensure this file is imported

const AccountDetail = () => {
  const { name } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const trainer = location.state;

  const [reason, setReason] = useState(trainer.bio || "");

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
          <p><strong>Media:</strong> {trainer.media}</p>
          <p><strong>Certification/Experience:</strong> {trainer.certificateExperience}</p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="bio-section">
        <strong>Reason Of Account Deletion</strong>
        <textarea readOnly>{trainer.bio || "This is a sample bio of the trainer."}</textarea>
      </div>

      {/* Buttons */}
      <div className="button-group">
        <button className="approve-button">Delete</button>
        <button className="reject-button" onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default AccountDetail;
