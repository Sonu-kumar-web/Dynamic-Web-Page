const express = require("express");
const router = express.Router();

const adminController = require("../../../controllers/api/v1/admin-controller");

// for Apis
router.get("/all-profiles", adminController.allProfiles);

module.exports = router;
