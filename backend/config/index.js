import express from "express";
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello from Express on Vercel!");
});

// Export the app
module.exports = app;
