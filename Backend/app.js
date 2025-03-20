
//password=ZW5sTNjC2ZfltIZd
const express = require("express");
const mongoose = require("mongoose");
const router =require("./Routes/ComplaintRoutes");
const app = express();
const cors = require("cors");
//Middleware

const port =5000;
app.use(cors());
app.use(express.json());
app.use("/complaints",router);


mongoose.connect("mongodb+srv://Dhanuka:20020502@af.5palh.mongodb.net/?retryWrites=true&w=majority&appName=AF")
.then(()=> console.log("Connected to MongoDB"))
.then(()=>{
  app.listen(3000);
})
.catch((err)=>console.log((err)));


const connection = mongoose.connection;
connection.once('open', () => {
    console.log('mongo DB success');
});

const userRouter = require('./Routes/user');
app.use('/users', userRouter);
app.use('/images', express.static('images'));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


  