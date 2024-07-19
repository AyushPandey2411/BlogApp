//import model

const Post=require("../models/postModel");
const Comment=require("../models/commentModel");

//business logic

exports.createComment=async(req,res)=>{
      try{
         //fetch data from req body
         const{post,user,body}=req.body;

         //create a comment object as will be using save 
         const comment=new Comment({
            post,user,body
         });

         //save the new comment into database
         const savedComment=await comment.save();

        /* const reponse=Comment.create    .....aise bhi ho sakta tha ....   */

        
        //find the post by id,add the new comment to its comments array
        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments: savedComment._id} }, {new:true} )
                                .populate("comments") //populate the comments array with comments documents
                                .exec();
        res.json({
            post:updatedPost,
        });
      }
      catch(error)
      {
         return res.status(500).json({
            error:"Error while creating comments",
         });
      }
}