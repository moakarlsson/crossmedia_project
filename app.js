
import express from "express";
import path from "path";
import session from "express-session";
import userRouter from "./routes/user.js";
import helmet from "helmet";

const app = express();
app.set("trust proxy", 1);
app.use(express.json());
app.use(express.static("public"));
app.use(helmet()); //Skyddar mot XSS attacker = "Cross-script attacks"


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax"
    }
}));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/homepage.html"));
});

app.use("/users", userRouter);

export default app;