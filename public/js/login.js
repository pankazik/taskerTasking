import axios from "axios";
import { showAlert } from "./alerts";

export const register = async (name, email, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/users/signup",
      data: {
        name,
        email,
        password,
        passwordConfirm,
      },
    });

    if (res.data.status === "success") {
      showAlert("success", "Account registered!");
      window.setTimeout(() => location.assign("/"), 1000);
    }
  } catch (err) {
    const { status, message } = err.response.data;
    showAlert(status, message);
  }
};

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/users/login",
      data: {
        email,
        password,
      },
    });

    if (res.data.status === "success") {
      showAlert("success", "Logged in successfully");
      window.setTimeout(() => location.assign("/"), 1000);
    }
  } catch (err) {
    const { status, message } = err.response.data;
    showAlert(status, message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "/api/users/logout",
    });

    if (res.data.status === "success") {
      showAlert("success", "Logged out successfully");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
  } catch (err) {
    console.log(err);
  }
};

export const addTask = async (text) => {
  if (text.length > 0) {
    try {
      const res = await axios({
        method: "POST",
        url: "/api/tasks/",
        data: {
          text,
        },
      });
      if (res.data.status === "success") {
        showAlert("success", "Task saved");
        window.setTimeout(() => {
          location.assign("/");
        }, 1000);
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    showAlert("fail", "Text must contain at least one character");
  }
};

export const deleteTask = async (taskId) => {
  try {
    const res = await axios({
      method: "DELETE",
      url: `/api/tasks/${taskId}`,
    });
    if (res.data.status === "success") {
      showAlert("success", "Task deleted");
      window.setTimeout(() => {
        location.assign("/");
      }, 500);
    }
  } catch (err) {
    console.log(err);
  }
};
