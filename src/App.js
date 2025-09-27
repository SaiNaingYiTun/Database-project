import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom"; 
import "./App.css";
import LoginPage from "./components/login/LoginPage";  // Import LoginPage from login folder
import TrainerHomePage from "./components/trainer/HomePage"; // Import Trainer HomePage from trainer folder
import ProgressCheck from "./components/trainer/ProgressCheck"; // Import Trainer ProgressCheck from trainer folder
import WorkoutPlans from "./components/trainer/WorkoutPlans";  // Import Trainer WorkoutPlans from trainer folder
import ProgressDetail from "./components/trainer/ProgressDetail";
import Trainees from "./components/trainer/Trainees";
import WorkoutAssign from "./components/trainer/WorkoutAssign";
import WorkoutAssignDetail from "./components/trainer/WorkoutAssignDetail";
import MealPlanAssign from "./components/trainer/MealPlanAssign";
//admin
import VideoApprove from "./components/admin/VideoApprove";
import ExerciseDetail from "./components/admin/ExerciseDetail";
import TrainersManagement from "./components/admin/TrainersManagement";
import UserManagement from "./components/admin/UserManagement";
import TrainerQualification from "./components/admin/TrainerQualification";
import TrainerDetail from "./components/admin/TrainerDetail";
import AccountDeletion from "./components/admin/AccountDeletion";
import AccountDetail from "./components/admin/AccountDetail";
//trainee
import TraineeHomePage from "./components/trainee/HomePage";
import TraineeProgressCheck from "./components/trainee/ProgressCheck";
import Trainers from "./components/trainee/TraineeTrainers";
import TraineeWorkoutPlans from "./components/trainee/WorkoutPlans";
import TraineeMealPlans from "./components/trainee/MealPlans"; 

const trainerData = [
  { email: "trainer@example.com", password: "trainer123" },
];

const traineeData = [
  { email: "trainee@example.com", password: "trainee123" },
];
const adminData = [
  { email: "admin@example.com", password: "trainee123" },
];

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false); 
  const [userType, setUserType] = useState(""); 
  const navigate = useNavigate(); 

  const handleLogin = (type, email, password) => {
    if (type === "trainer") {
      const trainer = trainerData.find(
        (trainer) => trainer.email === email && trainer.password === password
      );
      if (trainer) {
        alert("Trainer logged in successfully");
        setLoggedIn(true);
        setUserType("trainer");
        navigate("/trainer/HomePage"); 
      } else {
        alert("Invalid Trainer credentials");
      }
    } else if (type === "trainee") {
      const trainee = traineeData.find(
        (trainee) => trainee.email === email && trainee.password === password
      );
      if (trainee) {
        alert("Trainee logged in successfully");
        setLoggedIn(true);
        setUserType("trainee");
        navigate("/trainee/HomePage"); 
      } else {
        alert("Invalid Trainee credentials");
      }
    }else if (type === "admin") {  // ✅ Added Admin Login Handling
      const admin = adminData.find(
        (admin) => admin.email === email && admin.password === password
      );
      if (admin) {
        alert("Admin logged in successfully");
        setLoggedIn(true);
        setUserType("admin");
        navigate("/admin/VideoApprove");  // ✅ Redirect Admin to their homepage
      } else {
        alert("Invalid Admin credentials");
      }
    }
    
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage onLogin={handleLogin} />} />

        {/* Trainer Routes */}
        <Route path="/trainer/HomePage" element={<TrainerHomePage />} />
        <Route path="/trainer/Trainees" element={<Trainees />} />
        <Route path="/trainer/WorkoutPlans" element={<WorkoutPlans />} />
        <Route path="/trainer/ProgressDetail/:id" element={<ProgressDetail />} />
        <Route path="/trainer/ProgressCheck" element={<ProgressCheck />} />
        <Route path="/trainer/WorkoutAssign/:traineeId" element={<WorkoutAssign />} />
        <Route path="/trainer/WorkoutAssignDetail" element={<WorkoutAssignDetail />} />
        <Route path="/trainer/MealPlanAssign/:traineeId" element={<MealPlanAssign />} />
        
        {/* Admin Routes */}
        <Route path="/admin/VideoApprove" element={<VideoApprove />} />
        <Route path="/admin/ExerciseDetail/:id" element={<ExerciseDetail />} />
        <Route path="/admin/TrainersManagement" element={<TrainersManagement />} />
        <Route path="/admin/UserManagement" element={<UserManagement />} />
        <Route path="/admin/TrainerQualification" element={<TrainerQualification />} />
        <Route path="/admin/TrainerQualification/:name" element={<TrainerDetail />} />
        <Route path="/admin/AccountDeletion" element={<AccountDeletion />} />
        <Route path="/admin/AccountDeletion/:name" element={<AccountDetail/>} />
        {/* Add more routes as needed */}
        {/* Trainee Routes */}
        <Route path="/trainee/HomePage" element={<TraineeHomePage/>} /> 
        <Route path="/trainee/ProgressCheck" element={<TraineeProgressCheck />} /> 
        <Route path="/trainee/TraineeTrainers" element={<Trainers />} />
        <Route path="/trainee/WorkoutPlans" element={<TraineeWorkoutPlans />} />
        <Route path="/trainee/MealPlans" element={<TraineeMealPlans />} />
      </Routes>
    </div>
  );
};

export default App;
