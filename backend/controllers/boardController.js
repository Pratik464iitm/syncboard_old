const Board = require("../models/Board");

const createBoard = async (req, res) => {

    try {

        const { title } = req.body;

        const board = await Board.create({
            title,
            owner: req.user._id
        });

        return res.status(201).json({
            message: "Board created successfully",
            board
        });

    } catch (error) {

        return res.status(500).json({
            message: "Server Error"
        });

    }

};

module.exports = {
    createBoard
};