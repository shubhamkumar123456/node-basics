const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    image:{
      type:String,
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true,
    }

},{timestamps:true})

module.exports = mongoose.model('post',postSchema)