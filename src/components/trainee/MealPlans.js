import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MealPlans.css";  // Scoped CSS
import UserMenu from "./UserMenu";

const TraineeMealPlans = () => {
  const [date, setDate] = useState(new Date()); // Calendar state
  const [selectedMeal, setSelectedMeal] = useState(null); // Modal state

  // Sample Meal Data
  const meals = [
    {
      id: 1,
      name: "Breakfast",
      protein: "3 Eggs, 1 scoop whey protein, 1 cup Greek yogurt ",
      fat: "½ Avocado, 1 tbsp peanut butter ",
      carbs: " ½ cup oats, 2 slices whole-wheat toast",
      icon: "🍳",
    },
    {
      id: 2,
      name: "Lunch",
      protein: "150g grilled chicken, 100g lean beef",
      fat: "1 tbsp coconut oil,  ½ avocado",
      carbs: " 1 medium sweet potato,  1 cup brown rice",
      icon: "🥗",
    },
    {
      id: 3,
      name: "Dinner",
      protein: "1 can tuna, 4 egg whites",
      fat: " ½ avocado, 1 tbsp butter",
      carbs: " 1 cup steamed veggies, 2 slices whole-wheat toast",
      icon: "🍲",
    },
    {
      id: 4,
      name: "Pre-workout",
      protein: "1 scoop whey protein ",
      fat: "1 tbsp peanut butter ",
      carbs: " 1 banana ",
      icon: "🥤",
    },
  ];

  return (
    <div className="trainee-meal-plans-page">
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
      <div className="trainee-main-content">
        <header>
          <h2>Today Meal Plan</h2>
          <UserMenu />
        </header>

        {/* Meal Plan Section */}
        <div className="trainee-meal-container">
          {/* Trainer Section */}
          <div className="trainee-trainer-section">
            <div className="trainee-trainer-image">👤</div>
            <div className="trainee-trainer-info">
              <h3>Trainer Name</h3>
              <p>Level: Beginner</p>
            </div>
          </div>

          {/* Calendar & Meals */}
          <div className="trainee-meal-content">
            {/* React Calendar */}
            <div className="trainee-calendar">
              <Calendar onChange={setDate} value={date} />
            </div>

            {/* Meal Box - Scrollable */}
            <div className="trainee-meal-container-box">
              <h3>Meal</h3>
              <div className="trainee-meal-list">
                {meals.map((meal) => (
                  <div 
                    className="trainee-meal-item" 
                    key={meal.id} 
                    onClick={() => setSelectedMeal(meal)}
                  >
                    <div className="trainee-meal-icon">{meal.icon}</div>
                    <div className="trainee-meal-info">
                      <p><strong>{meal.name}</strong></p>
                      <p>Protein: {meal.protein}</p>
                      <p>Fat: {meal.fat}</p>
                      <p>Carbs: {meal.carbs}</p>
                    </div>
                  </div>
                ))}
                {/* Complete Button Inside Meal Box */}
                <button className="trainee-complete-btn">Complete</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Meal Details */}
      {selectedMeal && (
        <div className="trainee-modal">
          <div className="trainee-modal-content">
            <span className="trainee-close-btn" onClick={() => setSelectedMeal(null)}>×</span>
            <h3>{selectedMeal.name}</h3>
            <p>Protein: {selectedMeal.protein}</p>
            <p>Fat: {selectedMeal.fat}</p>
            <p>Carbs: {selectedMeal.carbs}</p>
            <button className="trainee-modal-done-btn" onClick={() => setSelectedMeal(null)}>Done</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TraineeMealPlans;
