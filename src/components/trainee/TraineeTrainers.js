import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TraineeTrainers.css";
import UserMenu from "./UserMenu";
import PriceModal from "./PriceModal"; // Renamed modal component

const Trainers = () => {
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState("All");

  const trainers = [
    { id: 1, name: "Trainer Name", level: "Beginner", price: "$50", type: "Beginner", phone: "123-456-7890", email: "trainer@email.com", media: "Instagram", bio: "Experienced trainer specialized in weight loss.", image: "" },
    { id: 2, name: "Trainer Name", level: "Intermediate", price: "$60", type: "Strength Coach", phone: "987-654-3210", email: "trainer@email.com", media: "Facebook", bio: "Strength training expert.", image: "" },
    { id: 3, name: "Trainer Name", level: "Advanced", price: "$70", type: "Elite Trainer", phone: "555-555-5555", email: "trainer@email.com", media: "Twitter", bio: "Personal trainer for advanced athletes.", image: "" },
    { id: 4, name: "Trainer Name", level: "Beginner", price: "$50", type: "General Coach", phone: "123-456-7890", email: "trainer@email.com", media: "Instagram", bio: "Motivational fitness coach.", image: "" },
    { id: 5, name: "Trainer Name", level: "Beginner", price: "$50", type: "Beginner Coach", phone: "123-456-7890", email: "trainer@email.com", media: "Instagram", bio: "Experienced trainer specialized in weight loss.", image: "" },
    { id: 6, name: "Trainer Name", level: "Intermediate", price: "$60", type: "Strength Coach", phone: "987-654-3210", email: "trainer@email.com", media: "Facebook", bio: "Strength training expert.", image: "" },
    { id: 7, name: "Trainer Name", level: "Advanced", price: "$70", type: "Elite Trainer", phone: "555-555-5555", email: "trainer@email.com", media: "Twitter", bio: "Personal trainer for advanced athletes.", image: "" },
    { id: 8, name: "Trainer Name", level: "Beginner", price: "$50", type: "General Coach", phone: "123-456-7890", email: "trainer@email.com", media: "Instagram", bio: "Motivational fitness coach.", image: "" },
  ];

  return (
    <div className="trainee-trainers-page">
      <div className="homepage">
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
            <h2>Trainers</h2>
            <UserMenu />
          </header>

          {/* Search and Filter Section */}
          <div className="trainee-trainer-search">
            <input type="text" placeholder="🔍 Search" className="trainee-search-input" />
            <div className="trainee-filter-buttons">
              <button 
                className={selectedLevel === "Beginner" ? "active" : ""}
                onClick={() => setSelectedLevel("Beginner")}
              >
                Beginner
              </button>
              <button 
                className={selectedLevel === "Intermediate" ? "active" : ""}
                onClick={() => setSelectedLevel("Intermediate")}
              >
                Intermediate
              </button>
              <button 
                className={selectedLevel === "Advanced" ? "active" : ""}
                onClick={() => setSelectedLevel("Advanced")}
              >
                Advanced
              </button>
            </div>
          </div>

          {/* Trainers Grid */}
          <div className="trainee-trainers-grid">
            {trainers
              .filter((trainer) => selectedLevel === "All" || trainer.level === selectedLevel)
              .map((trainer) => (
                <div key={trainer.id} className="trainee-trainer-card">
                  <span className="trainee-trainer-level">{trainer.level}</span>
                  <div className="trainee-trainer-image">Trainer Image</div>
                  <div className="trainee-trainer-info">
                    <h4>{trainer.name}</h4>
                    <p>
                      <strong>Price:</strong> 
                      <span className="trainee-trainer-price" onClick={() => setSelectedTrainer(trainer)}>
                        {trainer.price}/Month
                      </span>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Price Modal */}
      {selectedTrainer && (
        <PriceModal trainer={selectedTrainer} onClose={() => setSelectedTrainer(null)} />
      )}
    </div>
  );
};

export default Trainers;
