import React, { useState } from "react";

const LoginForm = ({ type, onLogin, onBack }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(type, email, password);
  };

  return (
    <div className="form-container">
      <h2>{type === "trainer" ? "Trainer Login" : "Trainee Login"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder={`${type.charAt(0).toUpperCase() + type.slice(1)} Email`}
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
        <button type="submit">Login</button>
      </form>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default LoginForm;
