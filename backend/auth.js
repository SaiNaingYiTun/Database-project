// auth.js
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Dummy user data (replace with database logic)
const users = [
  { email: "example@example.com", password: bcrypt.hashSync("password123", 10), type: "trainer" }
];

// Signup Route (POST)
router.post("/signup", (req, res) => {
  const { email, password, type } = req.body;
  
  // Basic validation
  if (!email || !password || !type) {
    return res.status(400).json({ message: "Please provide email, password, and type." });
  }

  // Hash the password and store user data
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Here you would save the new user to the database
  users.push({ email, password: hashedPassword, type });

  res.status(201).json({ message: "User registered successfully!" });
});

// Login Route (POST)
router.post("/login", (req, res) => {
  const { email, password, type } = req.body;

  // Find user based on email and type
  const user = users.find(user => user.email === email && user.type === type);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Compare provided password with stored password
  const passwordIsValid = bcrypt.compareSync(password, user.password);

  if (!passwordIsValid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Generate JWT token
  const token = jwt.sign({ id: user.email }, "your_jwt_secret_key", { expiresIn: "1h" });

  res.json({ token });
});

module.exports = router;
