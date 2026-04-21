import express from "express";
const router = express.Router();
import db from "../db/connection.js";


router.get("/test", async (req, res) => {
    console.log("TEST ROUTE HIT");
    res.send("OK");
});

router.post("/createUser", async (req, res) => {
    const { userName, password } = req.body;
    try {
        const [result] = await db.query("INSERT INTO user (userName, password) VALUES (?,?)", [userName, password]);
        res.status(201).json({
            message: "User added!",
            insertId: result.insertId
        });
    } catch (error) {
        console.error(error);
        console.error("MYSQL ERROR:", error);
        res.status(500).json({ error: error.message });
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;