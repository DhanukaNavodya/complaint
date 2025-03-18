
//password=ZW5sTNjC2ZfltIZd
const express = require("express");
const mongoose = require("mongoose");
const router =require("./Routes/ComplaintRoutes");
const app = express();
const cors = require("cors");
//Middleware

app.use(express.json());
app.use(cors());
app.use("/complaints",router);


mongoose.connect("mongodb+srv://admin:ZW5sTNjC2ZfltIZd@cluster0.qehoc.mongodb.net/")
.then(()=> console.log("Connected to MongoDB"))
.then(()=>{
  app.listen(3000);
})
.catch((err)=>console.log((err)));



  
