const express = require("express");
const cors = require("cors");
const authRoutes = require("./auth");  // Assuming you have an auth.js file for handling authentication logic

const app = express();

// Middleware
app.use(cors());  // Enable CORS for all origins (can be more specific if needed)
app.use(express.json());  // Middleware to parse JSON requests

// Use the authentication routes for /auth
app.use("/auth", authRoutes);

// Set the server to listen on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
