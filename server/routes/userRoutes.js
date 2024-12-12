const express = require("express");
const router = express.Router();

const userController = require("../controllers/accountController");

router.get("/", userController.getAllUsers);
router.post("/", userController.getAllUsers);

module.exports = router;
