import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
// Routes
app.get("/", (req, res) => {
  res.send("Hello from Express on Vercel!");
});

// Export the app
export default app;
