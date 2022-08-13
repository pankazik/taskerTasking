const Task = require("../models/taskModel");
const catchAsync = require("../utils/catchAsync");

exports.getUserTasks = async (req, res, next) => {
  let tasks = [];
  if (req.user) {
    tasks = await Task.find();
  } else {
    tasks = req.cookies["tasks"];
  }

  res.status(200).json({
    status: "success",
    data: {
      tasks,
    },
  });
};

exports.postNewTask = catchAsync(async (req, res, next) => {
  if (req.user) {
    newTask = await Task.create({
      text: req.body.text,
      user: req.user.id,
    });
  } else {
    let tasks = [];
    if (req.cookies["tasks"]) tasks = req.cookies["tasks"];
    if (req.body.text.length > 0) {
      tasks.push({
        id: tasks.length,
        text: req.body.text,
        user: "local",
        creationDate: Date.now(),
        active: true,
      });
    }
    res.cookie("tasks", tasks);
  }

  res.status(201).json({
    status: "success",
    data: null,
  });
});

exports.deleteTask = catchAsync(async (req, res, next) => {
  if (req.user) {
    await Task.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: "success",
      data: null,
    });
  } else {
    let tasks = req.cookies["tasks"];
    tasks.splice(req.params.id, 1);
    res.status(201).cookie("tasks", tasks).json({
      status: "success",
      data: null,
    });
  }
});
