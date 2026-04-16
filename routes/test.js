import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
    res.send("Det funkar!");
})



router.get("/test", async (req, res) => {
    console.log("TEST ROUTE HIT");
    res.send("OK");
});



export default router;