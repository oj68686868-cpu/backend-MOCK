import Task from "../models/task.model.js";

// In-memory cache
let cache = {
  data: null,
  timestamp: null,
};

export const getAllTasks = async (req, res) => {
  try {
    const now = Date.now();

    // ✅ RETURN CACHE IF VALID (<60 sec)
    if (cache.data && now - cache.timestamp < 60000) {
      return res.json({
        source: "cache",
        tasks: cache.data,
      });
    }

    const tasks = await Task.find();

    // ✅ STORE IN CACHE
    cache = {
      data: tasks,
      timestamp: now,
    };

    res.json({
      source: "db",
      tasks,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE TASK
export const createTask = async (req, res) => {
  const task = await Task.create(req.body);

  // ✅ CLEAR CACHE
  cache = { data: null, timestamp: null };

  res.json(task);
};

// UPDATE TASK
export const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  // ✅ CLEAR CACHE
  cache = { data: null, timestamp: null };

  res.json(task);
};