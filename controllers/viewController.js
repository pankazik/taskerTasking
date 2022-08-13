const Task = require("../models/taskModel");

const catchAsync = require("../utils/catchAsync");

exports.getOverview = catchAsync(async (req, res, next) => {
  let tasks = [];
  if (req.user) {
    tasks = await Task.find({ user: req.user }).populate("user");
  } else {
    tasks = req.cookies["tasks"];
  }
  if (tasks && tasks.length > 0 && typeof tasks[0].creationDate !== "object") {
    tasks.map((task) => (task.creationDate = new Date(task.creationDate)));
  }

  res.status(200).render("website", {
    title: "Simple note application",
    tasks,
    user: req.user?.name,
  });
});
