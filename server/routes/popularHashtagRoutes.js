const express = require("express");
const router = express.Router();

const popularHashtagController = require("../controllers/popularHashtagController");

router.get("/", popularHashtagController.getPopularHashtag);

module.exports = router;
