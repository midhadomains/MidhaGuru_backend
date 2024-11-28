const express = require('express');
const { connection }= require('./db.js')
const cors = require('cors');
const testRouter = require('./routes/testRoute.js');


require("dotenv").config();


const PORT =  8000;

const app = express();
app.use(express.json());
app.use(cors())


app.use('/api/test', testRouter);

app.get("/", (req,res)=>{
    res.send("Api is running successfully")
})


app.listen(PORT,async()=>{
    try {
        await connection;
        console.log("DB is connected");
        console.log(`Server is running on http://localhost:${PORT}`);
    } catch (error) {
        console.log(error)
    }
   
})