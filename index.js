const express=require("express");
const app=express();

require("dotenv").config();

const PORT=process.env.PORT||4000;

//middleware for parsing json
app.use(express.json());

const blog=require("./routes/blog");

//mount
app.use("/api/v1",blog);

const connectWithDb=require("./config/database");
connectWithDb(); //function call

//start the server
app.listen(PORT,()=>{
    console.log(`app is started at port no. ${PORT}`);   
})

app.get("/",(req,res)=>{
    res.send(`<h1>this is homepage</h1>`);
})