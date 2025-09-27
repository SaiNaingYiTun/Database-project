import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';  // Import axios for making API requests
import "./LoginPage.css";

const LoginPage = ({ onLogin }) => {
  const [showForm, setShowForm] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [trainerData, setTrainerData] = useState({
    name: "",
    type: "Beginner",
    phone: "",
    email: "",
    height: "",
    weight: "",
    media: "",
    certification: null,
  });

  const [traineeData, setTraineeData] = useState({
    name: "",
    email: "",
    phone: "",
    weight: "",
    fitnessGoal: "",
  });

  const navigate = useNavigate();

  // Handle login submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
        type: showForm,  // Send login type (trainer, trainee, admin)
      });

      if (response.data.token) {
        alert("Login successful!");
        // Store token in localStorage or sessionStorage
        localStorage.setItem("token", response.data.token);
        onLogin(showForm, email, password);  // Perform login logic
        // Redirect to appropriate page based on user type
        if (showForm === "trainer") navigate("/trainer/HomePage");
        else if (showForm === "trainee") navigate("/trainee/HomePage");
        else if (showForm === "admin") navigate("/admin/VideoApprove");
      }
    } catch (error) {
      console.error(error);
      alert("Invalid credentials or error with login");
    }
  };

  // Handle trainer sign-up submission
  const handleTrainerSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send trainer data to backend for account creation
      const response = await axios.post("http://localhost:5000/auth/signup", trainerData);
      alert("Trainer Signed Up Successfully!");
      setShowForm(null);
    } catch (error) {
      console.error(error);
      alert("Error signing up trainer");
    }
  };

  // Handle trainee sign-up submission
  const handleTraineeSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send trainee data to backend for account creation
      const response = await axios.post("http://localhost:5000/auth/signup", traineeData);
      alert("Trainee Signed Up Successfully!");
      setShowForm(null);
    } catch (error) {
      console.error(error);
      alert("Error signing up trainee");
    }
  };

  return (
    <div className="login-page">
      <h1>Login System</h1>

      {/* Show login/signup options */}
      {!showForm && (
        <div className="login-container">
          <button onClick={() => setShowForm("trainer")}>Trainer Login</button>
          <button onClick={() => setShowForm("trainee")}>Trainee Login</button>
          <button onClick={() => setShowForm("admin")}>Admin Login</button>
          <button onClick={() => setShowForm("signup-trainer")}>Sign Up for Trainer</button>
          <button onClick={() => setShowForm("signup-trainee")}>Sign Up for Trainee</button>
        </div>
      )}

      {/* Login Form */}
      {(showForm === "trainer" || showForm === "trainee" || showForm === "admin") && (
        <div className="login-form">
          <h2>{showForm === "trainer" ? "Trainer Login" : showForm === "trainee" ? "Trainee Login" : "Admin Login"}</h2>
          <form onSubmit={handleLoginSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email || ""}  // Make sure the value is always a defined string (empty string if undefined)
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password || ""}  // Same here for password field
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
          <button onClick={() => setShowForm(null)}>Back</button>
        </div>
      )}

      {/* Trainer Sign-Up Form */}
      {showForm === "signup-trainer" && (
        <div className="signup-form">
          <button className="close-btn" onClick={() => setShowForm(null)}>✖</button>
          <h2>Trainer Sign-Up</h2>
          <form onSubmit={handleTrainerSignUpSubmit}>
            <label>Trainer Name:</label>
            <input type="text" placeholder="Enter name" value={trainerData.name} onChange={(e) => setTrainerData({...trainerData, name: e.target.value})} required />

            <label>Trainer Type:</label>
            <select value={trainerData.type} onChange={(e) => setTrainerData({...trainerData, type: e.target.value})}>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

            <label>Phone:</label>
            <input type="text" placeholder="Enter phone" value={trainerData.phone} onChange={(e) => setTrainerData({...trainerData, phone: e.target.value})} required />

            <label>Email:</label>
            <input type="email" placeholder="Enter email" value={trainerData.email} onChange={(e) => setTrainerData({...trainerData, email: e.target.value})} required />

            <label>Password:</label>
            <input type="password" placeholder="Enter password" value={trainerData.password} onChange={(e) => setTrainerData({...trainerData, password: e.target.value})} required />

            <label>Height:</label>
            <input type="text" placeholder="Enter height" value={trainerData.height} onChange={(e) => setTrainerData({...trainerData, height: e.target.value})} />

            <label>Weight:</label>
            <input type="text" placeholder="Enter weight" value={trainerData.weight} onChange={(e) => setTrainerData({...trainerData, weight: e.target.value})} />

            <label>Media:</label>
            <input type="text" placeholder="Enter media link" value={trainerData.media} onChange={(e) => setTrainerData({...trainerData, media: e.target.value})} />

            <label>Certification / Work Experience:</label>
            <input type="file" onChange={(e) => setTrainerData({...trainerData, certification: e.target.files[0]})} />

            <button type="submit">Sign Up</button>
          </form>
        </div>
      )}

      {/* Trainee Sign-Up Form */}
      {showForm === "signup-trainee" && (
        <div className="signup-form">
          <button className="close-btn" onClick={() => setShowForm(null)}>✖</button>
          <h2>Trainee Sign-Up</h2>
          <form onSubmit={handleTraineeSignUpSubmit}>
            <label>Trainee Name:</label>
            <input type="text" placeholder="Enter name" value={traineeData.name} onChange={(e) => setTraineeData({...traineeData, name: e.target.value})} required />

            <label>Trainee Type:</label>
            <select value={traineeData.type} onChange={(e) => setTraineeData({...traineeData, type: e.target.value})}>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
            
            <label>Phone:</label>
            <input type="text" placeholder="Enter phone" value={traineeData.phone} onChange={(e) => setTraineeData({...traineeData, phone: e.target.value})} required />

            <label>Email:</label>
            <input type="email" placeholder="Enter email" value={traineeData.email} onChange={(e) => setTraineeData({...traineeData, email: e.target.value})} required />

            <label>Password:</label>
            <input type="password" placeholder="Enter password" value={traineeData.password} onChange={(e) => setTraineeData({...traineeData, password: e.target.value})} required />

            <label>Height:</label>
            <input type="text" placeholder="Enter height" value={traineeData.height} onChange={(e) => setTraineeData({...traineeData, height: e.target.value})} />

            <label>Weight:</label>
            <input type="text" placeholder="Enter weight" value={traineeData.weight} onChange={(e) => setTraineeData({...traineeData, weight: e.target.value})} />

            <label>Media:</label>
            <input type="text" placeholder="Enter media link" value={traineeData.media} onChange={(e) => setTraineeData({...traineeData, media: e.target.value})} />

            <button type="submit">Sign Up</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
