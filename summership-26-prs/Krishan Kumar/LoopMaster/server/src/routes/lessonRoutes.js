const express = require("express");
const router = express.Router();
const prisma = require("../utils/prisma");

router.get("/", async (req, res) => {
    try {
        const lessons = await prisma.lesson.findMany({
            orderBy: {
                order: "asc"
            }
        });

        res.json(lessons);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;