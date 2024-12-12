const express = require('express');
const cors = require("cors");
const { connection }= require('./db.js');
const { testRouter } = require('./routes/test.routes.js');
const { userRouter } = require('./routes/user.routes.js');
const boardRouter = require('./routes/boardRoutes.js');
const classRouter = require('./routes/classRoutes.js');
const subjectRouter = require('./routes/subjectRoutes.js');
const chapterRouter = require('./routes/chapterRoutes.js');
const mockTestRouter = require('./routes/mocktestRoutes.js');


require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req,res)=>{
    res.send("Api is running successfully");
})

app.use("/test", testRouter );
app.use("/user", userRouter );
app.use("/api/boards", boardRouter);
app.use("/api/classes", classRouter);
app.use("/api/subjects", subjectRouter);
app.use("/api/chapters", chapterRouter);
app.use("/api/mocktests", mockTestRouter);



app.listen(PORT,async()=>{
    try {
        await connection;
        console.log("DB is connected");
        console.log(`Server is running on http://localhost:${PORT}`);
    } catch (error) {
        console.log(error);
    }
});

