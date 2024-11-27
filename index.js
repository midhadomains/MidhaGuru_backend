const express = require('express');
const { connection }= require('./db.js')
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

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