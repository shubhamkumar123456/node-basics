
const Post = require('../models/Post');
const fs =require('fs');

const createPost = async(req,res)=>{
  try {
    const {title,desc,user} = req.body;
    const image = req.body.image;
    // const image = req.files
  //   console.log(title,image,user,image)
  //   if(image){
  //     image.data = fs.readFileSync(image.path)
  //     image.contentType = image.type
  // }
  
    let post = await Post.create({
        title,
        image,
        desc,
        user
    })
    return res.status(200).json({success: true,msg:"post created successfully"})
  } catch (error) {
    res.status(500).json({success:false,msg:"error in creating post", error:error.message})
  }
}

const updatePost = async(req,res)=>{
  const {title,desc,image} =req.body;
 try {
  const post = await Post.findByIdAndUpdate({_id:req.params.id},{$set:{title:title,desc:desc,image:image}},{new:true})
  res.status(200).json({success:true,msg:"post updated successfully",post})
 } catch (error) {
  res.status(500).json({success:false,msg:"error in updating post", error:error.message})
 }

}

const deletePost = async(req,res)=>{
  try {
      const post = await Post.findByIdAndDelete({_id:req.params._id})
      res.status(200).json({success:true,msg:"post deleted successfully"})
  } catch (error) {
    res.status(500).json({error:error.message,msg:"error in deleting post"})
  }
}

const getAllPost = async(req,res)=>{
 try {
  const post = await Post.find().populate("user","name")
  if(post){
    return res.status(200).json({success: true,msg:"Post fetched successfully",post});
  }else{
   return res.status(404).json({success: false,msg:"no post found"});
  }
 } catch (error) {
    res.status(500).json({success: false,msg:"error in fetching all posts"})
 }
}


const getUserAllPost = async(req,res)=>{
  console.log(req.params.id)
  try{
  const posts = await Post.find({user:req.params.id})
  console.log(posts)
  if(posts){
    return res.status(200).json({success: true,msg:"Post fetched successfully",posts});
  }else{
   return res.status(404).json({success: false,msg:"no post found"});
  }
 } catch (error) {
    res.status(500).json({success: false,msg:"error in fetching all posts"})
 }
}


module.exports ={
    createPost,
    updatePost,
    deletePost,
    getAllPost,
    getUserAllPost
}

