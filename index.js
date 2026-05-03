import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import taskRoutes from "./routes/task.routes.js";

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

app.use("/api", taskRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});