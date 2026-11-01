const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const lessonRoutes = require("./routes/lessonRoutes");
const challengeRoutes = require("./routes/challengeRoutes");

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to LoopMaster API!",
        status: "Server is running"
    });
});

app.use("/api/lessons", lessonRoutes);
app.use("/api/challenges", challengeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`LoopMaster server running on port ${PORT}`);
});