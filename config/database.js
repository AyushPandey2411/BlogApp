const mongoose=require("mongoose");

require("dotenv").config()

const connectWithDb=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
       
    })
    .then(()=>console.log("DB Connection Successfull"))
    .catch((error)=>{
          console.log("Issue in Db Connection");
          console.error(error.message);
          process.exit(1);
    });
}

module.exports=connectWithDb;