
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import session from "express-session";
import userRouter from "./routes/user.js";
import helmet from "helmet";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadPath = process.env.VOLUME_PATH || "group_img";


const app = express();
app.set("trust proxy", 1);
app.use(express.json());
app.use(express.static("public"));
app.use(helmet()); //Skyddar mot XSS attacker = "Cross-script attacks"
app.use("/group_img", express.static(uploadPath));

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
    res.sendFile(path.join(process.cwd(), "public", "html", "startsida.html"));
});

app.use("/users", userRouter);

export default app;