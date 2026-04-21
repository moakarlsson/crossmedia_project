import express from "express";
const router = express.Router();
import db from "../db/connection.js";
import bcrypt from "bcrypt";
const costFactor = 12;


router.get("/", async (req, res) => {
    res.send("Det funkar!");
})


router.get("/test", async (req, res) => {
    console.log("TEST ROUTE HIT");
    res.send("OK");
});

router.post("/createUser", async (req,res) => {
    const  { userName, password} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, costFactor);
        const [result] = await db.query("INSERT INTO user (userName, password) VALUES (?,?)" , [userName, hashedPassword]);
        res.status(201).json({
            message: "User added!",
            insertId : result.insertId
        });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
//Eventuellt lägga till true/false för inloggning/utloggning
router.post("/userLogIn", async (req, res) => {
    const { userName, password } = req.body;
    try {
        const [ rows ] = await db.query(
            "SELECT * FROM user WHERE userName = ?",
            [userName]
        )
        if (rows.length === 0) {
            return res.status(401).json({ error: "Fel användarnamn eller lösenord"});
        }
        const user = rows[0];
        const match = await bcrypt.compare(password, user.password)

        if (!match) {
            return res.status(401).json({ error: "Fel användarnamn eller lösenord" })

        }
        res.status(200).json({ message: "Inloggad!" })

    } catch (error) {
        console.error("LOGIN ERROR:", error);
        res.status(500).json({error: "Internal server error"})
    }
});

export default router;