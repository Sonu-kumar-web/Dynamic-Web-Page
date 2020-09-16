const express = require("express");
const router = express.Router();

const userController = require("../../../controllers/api/v1/user-controller.js");

// for Apis
router.post("/signup", userController.Signup);

module.exports = router;
