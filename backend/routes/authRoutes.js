const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {

    registerUser,

    loginUser,

    getCurrentUser

} = require("../controllers/authController");

const { createBoard } = require("../controllers/boardController");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/boards", protect, createBoard);

router.get("/me", protect, getCurrentUser);

module.exports=router;