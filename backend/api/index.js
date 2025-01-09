import express from "express";
import cors from "cors";
const PORT = process.env.PORT || 3000; // Use Vercel's environment variable or default to 3000

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
// Routes
app.get("/api", (req, res) => {
  res.json({ message: "Hello from the backend API!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// Export the app
export default app;
