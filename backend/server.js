require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
mongoose.connect("mongodb+srv://rishiv1000:1221@cluster0.pofzv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const app = express();
const db = mongoose.connection;
app.use(cors());
app.use(express.json());
db.on("error",(err)=>console.log(err));
db.on("open",()=>console.log("DATABASE CONNECTED"));

const tasRouter = require("./routes/tasks");
app.use("/api/tasks",tasRouter)





app.listen( 3002,()=>console.log(`server is listening at port ${process.env.PORT}`));