const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

// GET all tasks (ordered: uncompleted by deadline, completed by dateCreated)
router.get("/", taskController.getTasks);

// CREATE new task
router.post("/", taskController.createTask);

// UPDATE task
router.put("/:id", taskController.updateTask);

// DELETE task
router.delete("/:id", taskController.deleteTask);

// COMPLETE task
router.put("/complete/:id", taskController.completeTask);

// SEARCH task by body text
router.get("/search/:name", taskController.searchTask);

module.exports = router;
