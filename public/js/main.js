import { login, logout, addTask, register, deleteTask } from "./login";

const registerBtn = document.querySelector(".registerbtn");
const logoutBtn = document.querySelector(".logout");
const loginBtn = document.querySelector(".login");
const taskBtn = document.querySelector(".add-task");
const registerSection = document.querySelector(".register-section");
const loginSection = document.querySelector(".login-section");
const taskSection = document.querySelector(".section-add-task");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const loginMail = document.getElementById("logname");
const loginPass = document.getElementById("logpass");
const taskForm = document.querySelector(".task-form");
const taskText = document.getElementById("task-text");
const regName = document.getElementById("regname");
const regMail = document.getElementById("regmail");
const regPass = document.getElementById("regpass");
const regPass2 = document.getElementById("regpass2");
const deleteTaskBtn = document.querySelectorAll(".deleteTask");

if (registerBtn) {
  registerBtn.addEventListener("click", function () {
    if (!loginSection.classList.contains("hider"))
      loginSection.classList.toggle("hider");
    if (!taskSection.classList.contains("hider"))
      taskSection.classList.toggle("hider");

    registerSection.classList.toggle("hider");
  });
}

if (loginBtn) {
  loginBtn.addEventListener("click", function () {
    if (!registerSection.classList.contains("hider"))
      registerSection.classList.toggle("hider");
    if (!taskSection.classList.contains("hider"))
      taskSection.classList.toggle("hider");

    loginSection.classList.toggle("hider");
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    logout();
  });
}

if (taskBtn) {
  taskBtn.addEventListener("click", () => {
    if (!loginSection.classList.contains("hider"))
      loginSection.classList.toggle("hider");
    if (!registerSection.classList.contains("hider"))
      registerSection.classList.toggle("hider");

    taskSection.classList.toggle("hider");
  });
}

document.querySelector("body").addEventListener("click", function (e) {
  if (e.target.value === "close") {
    e.target.parentElement.parentElement.parentElement.classList.toggle(
      "hider"
    );
  }
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  login(loginMail.value, loginPass.value);
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask(taskText.value);
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  register(regName.value, regMail.value, regPass.value, regPass2.value);
});

if (deleteTaskBtn) {
  deleteTaskBtn.forEach((task) => {
    task.addEventListener("click", function () {
      deleteTask(this.dataset.taskId);
    });
  });
}
