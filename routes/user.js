import express from "express";
import path from "path"; 
const router = express.Router();
import db from "../db/connection.js";
import bcrypt from "bcrypt";
import multer from "multer";
const costFactor = 12;

const uploadPath = process.env.VOLUME_PATH || "group_img";

//Konfiguera lagring
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadPath)
    },
    filename: function (req, file, cb) {
        const uniqueName = Date.now() + "-" + Math.round(Math.random()* 1e9);
        cb(null, uniqueName + path.extname(file.originalname));
    }
});

const upload = multer({ storage });


//GET
router.get("/me", (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ error: "Inte inloggad" });
    }

    res.json(req.session.user);
});

//POST
router.post("/createUser",upload.single("groupImage"), async (req, res) => {
    const { userName, password } = req.body;
    const imageUrl = req.file ? `/group_img/${req.file.filename}` : null;
    try {
        const hashedPassword = await bcrypt.hash(password, costFactor);
        const [result] = await db.query("INSERT INTO user (userName, password, imageUrl) VALUES (?,?,?)", [userName, hashedPassword, imageUrl]);
        res.status(201).json({
            message: "Användare tillagd!",
            insertId: result.insertId
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

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
    }
});

router.post("/logout", (req, res) => {
    req.session.destroy(() => {
        res.status(200).json({ message: "Utloggad" });
    });
});

router.post("/saveResult", async (req, res) => {
    console.log("saveResult anropades!"); // ← lägg till
    console.log("Body:", req.body); 
    if (!req.session.user) {
        return res.status(401).json({ error: "Inte inloggad" });
    }
    const { timeLeft, startTime, endTime } = req.body;
    const userId = req.session.user.id;

    try {
        await db.query(
            "INSERT INTO result (user_id, time_left, start_time, end_time) VALUES (?, ?, ?, ?)",
            [userId, timeLeft, startTime, endTime]
        );

        res.json({ message: "Result sparat!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/leaderboard", async (req, res) => {
    try {
        const [rows] = await db.query(`
            SELECT 
                u.userName,
                MAX(r.time_left) AS time_left,
                ROUND((MAX(r.end_time) - MIN(r.start_time)) / 1000) AS time_taken_seconds
            FROM result r
            JOIN user u ON r.user_id = u.id
            GROUP BY u.id, u.userName
            ORDER BY time_left DESC
        `);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
export default router;