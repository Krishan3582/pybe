const express = require("express");
const router = express.Router();
const prisma = require("../utils/prisma");

router.get("/", async (req, res) => {
    try {
        const challenges = await prisma.challenge.findMany();

        res.json(challenges);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;