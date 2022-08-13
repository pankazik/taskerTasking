const express = require("express");
const userController = require("../controllers/userController");
const viewController = require("../controllers/viewController");

const router = express.Router();

router.get("/", userController.protect, viewController.getOverview);

module.exports = router;
