
import express from "express";
import path from "path";
import session from "express-session";
import userRouter from "./routes/user.js";

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.NODE_ENV === 'production' }
}));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/homepage.html"));
});

app.use("/users", userRouter);

export default app;