const Task = require("../enteties/taskModel");

class TaskRepository {
  async getAll() {
    return Task.find();
  }

  async create(data) {
    const task = new Task(data);
    return task.save();
  }

  async update(id, data) {
    return Task.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return Task.findByIdAndDelete(id);
  }
}

module.exports = new TaskRepository();
