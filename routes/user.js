import express from "express";
const router = express.Router();
import db from "../db/connection.js";
import bcrypt from "bcrypt";
const costFactor = 12;


//GET

router.get("/test", async (req, res) => {
    console.log("TEST ROUTE HIT");
    res.send("OK");
});

router.get("/me", (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ error: "Inte inloggad" });
    }

    res.json(req.session.user);
});


//POST

router.post("/createUser", async (req, res) => {
    const { userName, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, costFactor);
        const [result] = await db.query("INSERT INTO user (userName, password) VALUES (?,?)", [userName, hashedPassword]);
        res.status(201).json({
            message: "User added!",
            insertId: result.insertId
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
//Eventuellt lägga till true/false för inloggning/utloggning
router.post("/userLogIn", async (req, res) => {
    const { userName, password } = req.body;
    try {
        const [rows] = await db.query(
            "SELECT * FROM user WHERE userName = ?",
            [userName]
        )
        if (rows.length === 0) {
            return res.status(401).json({ error: "Fel användarnamn eller lösenord" });
        }
        const user = rows[0];
        const match = await bcrypt.compare(password, user.password)

        if (!match) {
            return res.status(401).json({ error: "Fel användarnamn eller lösenord" })

        }
        req.session.user = { id: user.id, userName: user.userName };
        res.status(200).json({ message: "Inloggad!", userName: user.userName });

    } catch (error) {
        console.error("LOGIN ERROR:", error);
        res.status(500).json({ error: "Internal server error" })
    }
});

router.post("/logout", (req, res) => {
    req.session.destroy(() => {
        res.json({ message: "Utloggad" });
    });
});

router.post("/saveResult", async (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ error: "Inte inloggad" });
    }

    const { timeLeft } = req.body;
    const userId = req.session.user.id;

    try {
        await db.query(
            "INSERT INTO result (id, time_left) VALUES (?, ?)",
            [userId, timeLeft]
        );

        res.json({ message: "Result sparat!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;