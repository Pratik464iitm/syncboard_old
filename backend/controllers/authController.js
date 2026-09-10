const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");
const User = require("../models/User");

// Register User
const registerUser = async (req, res) => {

    try {

        // Option 1 (Recommended for Beginners)
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        /* OR

        const { name, email, password } = req.body;

        */

        // Check if all fields are provided
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Please fill all the fields."
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                message: "User already exists."
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        return res.status(201).json({
            message: "User Registered Successfully",
            user
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: "Internal Server Error"
        });

    }

};

const loginUser = async (req, res) => {

    try {

        const email = req.body.email;
        const password = req.body.password;

        /* OR

        const { email, password } = req.body;

        */

        if (!email || !password) {
            return res.status(400).json({
                message: "Please fill all the fields."
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User does not exist."
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password."
            });
        }

        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET
        );

        return res.status(200).json({
            message: "Login Successful"
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: "Internal Server Error"
        });

    }

};

const getCurrentUser = (req, res) => {

    return res.status(200).json({
        user: req.user
    });

};

module.exports = {

    registerUser,

    loginUser,

    getCurrentUser

};