const express = require("express");
const router = express.Router();

const popularEmailController = require("../controllers/popularEmailController");

router.get("/", popularEmailController.getPopularEmail);

module.exports = router;
