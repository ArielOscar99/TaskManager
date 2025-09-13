const Task = require("../models/Task");

const getTasks = async () => {
  // uncompleted first, ordered by deadline ascending
  // then completed, ordered by dateCreated descending
  const tasks = await Task.find()
    .sort({ completed: 1, deadline: 1, dateCreated: -1 });
  return tasks;
};

const createTask = async (data) => {
  const task = new Task(data);
  return await task.save();
};

const updateTask = async (id, data) => {
  return await Task.findByIdAndUpdate(id, data, { new: true });
};

const deleteTask = async (id) => {
  return await Task.findByIdAndDelete(id);
};

const completeTask = async (id) => {
  return await Task.findByIdAndUpdate(id, { completed: true }, { new: true });
};

const searchTask = async (query) => {
  // case insensitive search
  return await Task.find({ body: { $regex: query, $options: "i" } });
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  completeTask,
  searchTask,
};
