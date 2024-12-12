const express = require("express");
const router = express.Router();

const popularPhoneNumberController = require("../controllers/popularPhoneNumberController");

router.get("/", popularPhoneNumberController.getPopularPhoneNumber);

module.exports = router;
