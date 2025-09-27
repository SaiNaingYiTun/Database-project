import { useParams,useLocation, useNavigate } from "react-router-dom";
import "./ExerciseDetail.css";


function ExerciseDetail() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    // Dummy exercise data (replace this with API or state)
    const exercise = location.state;

    if (!exercise) {
        return <p>Error: No exercise data found.</p>; // Handle missing data
    }

    return (
        <div className="exercise-detail">
            <button onClick={() => navigate(-1)} className="back-button">Back</button>
            
            <video controls width="600">
            <source src={exercise.videoUrl || "https://www.example.com/default-video.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            
            <p><strong>Exercise Name:</strong> {exercise.exercise}</p>
            <p><strong>Sets & Reps:</strong> {exercise.setRep}</p>
            <p><strong>Rest Time:</strong> {exercise.restTime}</p>

            <div className="action-buttons">
                <button className="approve">Approve</button>
                <button className="reject">Reject</button>
            </div>
        </div>
    );
}

export default ExerciseDetail;
