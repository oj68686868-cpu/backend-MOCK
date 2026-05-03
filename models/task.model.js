import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: String,
  status: String,
  priority: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    index: true, // ✅ INDEX
  },
});

// ✅ COMPOUND INDEX
taskSchema.index({ status: 1, priority: 1 });

export default mongoose.model("Task", taskSchema);