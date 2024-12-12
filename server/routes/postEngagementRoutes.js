const express = require("express");
const router = express.Router();

const postEngagementController = require("../controllers/postEngagementController");

router.get("/", postEngagementController.getPostEngagement);

module.exports = router;
