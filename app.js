
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import session from "express-session";
import userRouter from "./routes/user.js";
import helmet from "helmet";
import fs from "fs";
const __filename = fileURLToPath(import.meta.url);
app.use("/group_img", express.static("group_img"));

if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

const app = express();
app.set("trust proxy", 1);
app.use(express.json());
app.use(express.static("public"));
app.use(helmet()); 
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