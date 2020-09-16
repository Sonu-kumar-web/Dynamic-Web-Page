const express = require("express");
const router = express.Router();

// const userController = require('../../../controllers/api/v1/user-controller.js');

// for Apis
router.get("/", (req, res) => res.send("Admin"));

module.exports = router;
