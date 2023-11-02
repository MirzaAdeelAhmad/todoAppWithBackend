const express = require("express");
const {
  RegisterController,
  LoginController,
} = require("../controller/UserController");

// Routes Object
const router = express.Router();

// Routes
// Register Route
router.post("/register", RegisterController);

// Login Route
router.post("/login", LoginController);

module.exports = router;
