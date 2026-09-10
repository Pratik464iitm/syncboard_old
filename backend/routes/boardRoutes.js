const express = require("express");

const router = express.Router();

const { createBoard } = require("../controllers/boardController");

const protect = require("../middleware/authMiddleware");

router.post("/", protect, createBoard);

module.exports = router;