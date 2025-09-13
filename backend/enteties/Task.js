const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  body: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now },
  deadline: { type: Date, required: true },
  color: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", taskSchema);
