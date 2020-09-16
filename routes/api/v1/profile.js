const express = require("express");
const router = express.Router();

const profileController = require("../../../controllers/api/v1/profile-controller");

// for Apis
router.get("/:id", profileController.userProfile);

module.exports = router;
