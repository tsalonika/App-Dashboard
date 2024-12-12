const express = require("express");
const router = express.Router();

const accountSentimentController = require("../controllers/accountSentimentController");

router.get("/", accountSentimentController.getAccountSentiment);

module.exports = router;
