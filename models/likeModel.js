//import mongoose
const mongoose=require("mongoose");


//route handler

const likeSchema=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId , // post ki id ke liye
        ref:"Post", //reference to Post model
    },
    user:{
        type:String,
        required:true,
    },
});



//export
module.exports=mongoose.model("Like", likeSchema);