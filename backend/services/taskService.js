const taskRepo = require("../repositories/taskRepository");

class TaskService {
  async getTasks() {
    try {
      return await taskRepo.getAll();
    } catch (error) {
      console.error("Service error in getTasks:", error.message);
      throw new Error("Could not retrieve tasks");
    }
  }

  async createTask(taskData) {
    try {
      return await taskRepo.create(taskData);
    } catch (error) {
      console.error("Service error in createTask:", error.message);
      throw new Error("Could not create task");
    }
  }

  async updateTask(id, taskData) {
    try {
      return await taskRepo.update(id, taskData);
    } catch (error) {
      console.error("Service error in updateTask:", error.message);
      throw new Error("Could not update task");
    }
  }

  async deleteTask(id) {
    try {
      return await taskRepo.delete(id);
    } catch (error) {
      console.error("Service error in deleteTask:", error.message);
      throw new Error("Could not delete task");
    }
  }
}

module.exports = new TaskService();
