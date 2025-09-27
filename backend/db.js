// db.js
const { Client } = require("pg"); // Import PostgreSQL Client from pg

const client = new Client({
  host: "localhost",  // Database host
  user: "postgres",   // PostgreSQL user
  password: "qiqi1124",  // PostgreSQL password
  database: "BuildUp",  // PostgreSQL database name
  port: 5432,            // Default PostgreSQL port
});

client.connect((err) => {
  if (err) throw err;
  console.log("Connected to the PostgreSQL database.");
});

module.exports = client;
