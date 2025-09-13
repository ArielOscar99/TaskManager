const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.get("/", (req, res) => taskController.getTasks(req, res));
router.post("/", (req, res) => taskController.createTask(req, res));
router.put("/:id", (req, res) => taskController.updateTask(req, res));
router.delete("/:id", (req, res) => taskController.deleteTask(req, res));
//router.put("/:name", (req, res) => taskController.searchTask(req, res));
//router.put("/:id", (req, res) => taskController.complteTask(req, res));


module.exports = router;
