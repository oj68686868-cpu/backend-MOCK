import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import taskRoutes from "./routes/task.routes.js";

dotenv.config();

const app = express();
app.use(express.json());

// ✅ DB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

// ✅ Routes
app.use("/api", taskRoutes);

// ✅ ROOT ROUTE (fixes your issue)
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// ✅ PORT FIX
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});