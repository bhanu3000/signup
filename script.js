const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const User = require("./model");
const app = express();
const PORT = 8080;
app.use(cors());
app.get("/",(req,res)=> {

    res.status(200).json({msg: "Welcome"});
});

app.get("/login",async (req,res)=> {
 
 const email = req.query.email;
 const user = await User.findOne({email});
 if(user){
    res.status(200).json({user});
 } else {
    res.status(400).json({error: "User not found"});
 }

});



app.listen(PORT,()=>{
    console.log(`Server at ${PORT}`);
});

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });



  