const taskService = require("../services/taskService");

class TaskController {
  async getTasks(req, res) {
    const tasks = await taskService.getTasks();
    res.json(tasks);
  }

  async createTask(req, res) {
    const task = await taskService.createTask(req.body);
    res.status(201).json(task);
  }

  async updateTask(req, res) {
    const task = await taskService.updateTask(req.params.id, req.body);
    res.json(task);
  }

  async deleteTask(req, res) {
    await taskService.deleteTask(req.params.id);
    res.status(204).send();
  }
}

module.exports = new TaskController();
