const express = require("express");
const taskController = require("../controllers/taskController");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.protect, taskController.getUserTasks);
router.post("/", userController.protect, taskController.postNewTask);
router.delete("/:id", userController.protect, taskController.deleteTask);

module.exports = router;
