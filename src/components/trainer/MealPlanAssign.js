import React, { useState } from 'react';
import './MealPlanAssign.css'; // Make sure to style according to your requirements
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Add calendar styling
import { useLocation, useNavigate } from 'react-router-dom';

const MealPlanAssign = () => {
  // Get trainee data passed from the previous page
  const location = useLocation();
  const { trainee } = location.state || {}; // Using the state passed from the previous page
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(new Date()); // Store the selected date
  const [mealPlans, setMealPlans] = useState({
    breakfast: { protein: '', fat: '', calories: '' },
    lunch: { protein: '', fat: '', calories: '' },
    dinner: { protein: '', fat: '', calories: '' },
    preworkout: { protein: '', fat: '', calories: '' },
  });

  const handleDateChange = (date) => {
    setSelectedDate(date); // Update the selected date when the user clicks on a date
  };

  const handleEdit = (meal) => {
    const protein = prompt('Enter Protein value:');
    const fat = prompt('Enter Fat value:');
    const calories = prompt('Enter Calories value:');

    if (protein && fat && calories) {
      setMealPlans((prevPlans) => ({
        ...prevPlans,
        [meal]: { protein, fat, calories },
      }));
    }
  };

  const handleDone = () => {
    alert('Meal plans saved (simulated).');
    // You can add more functionality like saving to a database here.
  };

  return (
    <div className="meal-assign-container">
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

      <div className="content-section">
        {/* Calendar Section */}
        <div className="calendar-section">
          <h4>Select a Date</h4>
          <Calendar onChange={handleDateChange} value={selectedDate} />
        </div>

        {/* Meal Plan Section */}
        <div className="meal-plans-section">
          <h4>Meal Plans</h4>
          <div className="meal-plan-options">
            <div className="meal-item">
              <label>Breakfast</label>
              <div>
                Protein: {mealPlans.breakfast.protein}, Fat: {mealPlans.breakfast.fat}, Calories: {mealPlans.breakfast.calories}
                <button onClick={() => handleEdit('breakfast')}>Edit</button>
              </div>
            </div>

            <div className="meal-item">
              <label>Lunch</label>
              <div>
                Protein: {mealPlans.lunch.protein}, Fat: {mealPlans.lunch.fat}, Calories: {mealPlans.lunch.calories}
                <button onClick={() => handleEdit('lunch')}>Edit</button>
              </div>
            </div>

            <div className="meal-item">
              <label>Dinner</label>
              <div>
                Protein: {mealPlans.dinner.protein}, Fat: {mealPlans.dinner.fat}, Calories: {mealPlans.dinner.calories}
                <button onClick={() => handleEdit('dinner')}>Edit</button>
              </div>
            </div>

            <div className="meal-item">
              <label>Preworkout</label>
              <div>
                Protein: {mealPlans.preworkout.protein}, Fat: {mealPlans.preworkout.fat}, Calories: {mealPlans.preworkout.calories}
                <button onClick={() => handleEdit('preworkout')}>Edit</button>
              </div>
            </div>
          </div>

          <button className="done-button" onClick={handleDone}>Done</button>
        </div>
      </div>
    </div>
  );
};

export default MealPlanAssign;
