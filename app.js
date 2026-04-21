// I denna filen läggs routes in, exempel:
// import tasksRouter from "./routes/tasks.js"
//app.use('/tasks', tasksRouter)
import express from "express";
import testRouter from "./routes/test.js";
import path from "path";
const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use('/', testRouter);


app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/homepage.html"));
});

export default app;