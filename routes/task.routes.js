import express from "express";
import {
  getAllTasks,
  createTask,
  updateTask,
} from "../controllers/task.controller.js";

const router = express.Router();

router.get("/tasks", getAllTasks);
router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);

export default router;