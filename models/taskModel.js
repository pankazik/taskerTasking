const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Task must have some text"],
    minlength: 1,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    reuired: [true, "Task must belong to user"],
  },
  creationDate: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  finishDate: Date,
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
