const express = require("express");
const router = express.Router();

const mediaPostController = require("../controllers/mediaPostController");

router.get("/", mediaPostController.getMediaPost);

module.exports = router;
