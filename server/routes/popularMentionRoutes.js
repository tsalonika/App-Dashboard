const express = require("express");
const router = express.Router();

const popularMentionController = require("../controllers/popularMentionController");

router.get("/", popularMentionController.getPopularMention);

module.exports = router;
