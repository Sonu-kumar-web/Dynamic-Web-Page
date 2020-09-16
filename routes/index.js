const express = require("express");
const router = express.Router();

// const homeController = require("../controllers/home_controller");

// router.use("/", homeController.home);
// router.use("/admin", require("./admin"));

// for Apis
router.use("/api", require("./api"));

module.exports = router;
