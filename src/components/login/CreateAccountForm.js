import React, { useState } from "react";

const CreateAccountForm = ({ onBack }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("trainer");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${accountType.charAt(0).toUpperCase() + accountType.slice(1)} account created!`);
    // Here you would send the data to your backend or save it locally
    onBack(); // Go back to the main page after account creation
  };

  return (
    <div className="form-container">
      <h2>Create Account</h2>
      <select
        value={accountType}
        onChange={(e) => setAccountType(e.target.value)}
      >
        <option value="trainer">Trainer</option>
        <option value="trainee">Trainee</option>
      </select>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button onClick={handleSubmit}>Create Account</button>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default CreateAccountForm;
