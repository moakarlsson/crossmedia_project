// I denna filen läggs routes in, exempel:
// import tasksRouter from "./routes/tasks.js"
//app.use('/tasks', tasksRouter)
import express from "express";
import testRouter from "./routes/user.js";
import path from "path";
import session from "express-session";
const app = express();
app.use(express.json());
app.use(express.static("public"));


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/homepage.html"));
});

app.use('/', testRouter);

export default app;