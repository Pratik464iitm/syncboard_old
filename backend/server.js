require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const boardRoutes = require("./routes/boardRoutes");

const app = express();

const PORT = process.env.PORT;

// Middleware
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use("/api/auth", authRoutes);

app.use("/api/boards", boardRoutes);

app.get("/", (req, res) => {
    res.send("SyncBoard Backend Running...");
});

const startServer = async () => {
    try {
        await connectDB(); // Connect to MongoDB before starting the server

        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });

    } catch (error) {
        console.error("Failed to start server:", error.message);
    }
};

startServer();