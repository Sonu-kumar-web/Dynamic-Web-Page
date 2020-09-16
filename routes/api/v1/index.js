const express = require("express");
const router = express.Router();

// for Apis
router.use("/user", require("./users"));
router.use("/admin", require("./admin"));

module.exports = router;
