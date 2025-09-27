import React, { useState } from "react";
import "./UserMenu.css";
import AccountModal from "./AccountModal"; // ✅ Import AccountModal
import TrainerModal from "./TrainerModal"; // ✅ Import Trainer Modal


const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // ✅ State for the modal
  const [trainerModalOpen, setTrainerModalOpen] = useState(false); // ✅ State for the trainer modal
  

  return (
    <div className="user-menu">
      <div className="user-icon" onClick={() => setIsOpen(!isOpen)}>
        👤 <span className="username">User Name</span> ▼
      </div>
      {isOpen && (
        <div className="dropdown">    
          <p onClick={() => setModalOpen(true)}>My Account</p> {/* ✅ Open Modal */}
          <p onClick={() => setTrainerModalOpen(true)}>My Trainer</p> {/* ✅ Open Trainer Modal */}
        </div>
      )}
      {/* ✅ Account Modal Component */}
      <AccountModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      
      {/* ✅ Trainer Modal Component */}
      <TrainerModal isOpen={trainerModalOpen} onClose={() => setTrainerModalOpen(false)} />
    </div>
  );
};

export default UserMenu;
