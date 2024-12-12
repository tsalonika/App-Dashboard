const express = require("express");
const router = express.Router();

const popularKeywordController = require("../controllers/popularKeywordController");

router.get("/", popularKeywordController.getPopularKeyword);

module.exports = router;
