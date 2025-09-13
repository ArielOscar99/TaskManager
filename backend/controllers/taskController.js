const taskService = require("../services/taskService");

const getTasks = async (req, res) => {
  try {
    const tasks = await taskService.getTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await taskService.createTask(req.body);
    const tasks = await taskService.getTasks(); // return updated list
    res.status(201).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await taskService.updateTask(req.params.id, req.body);
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    await taskService.deleteTask(req.params.id);
    const tasks = await taskService.getTasks(); // return updated list
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const completeTask = async (req, res) => {
  try {
    const task = await taskService.completeTask(req.params.id);
    const tasks = await taskService.getTasks(); // return updated list
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const searchTask = async (req, res) => {
  try {
    const tasks = await taskService.searchTask(req.params.name);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  completeTask,
  searchTask,
};
