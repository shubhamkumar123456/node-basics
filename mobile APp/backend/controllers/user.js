const User = require('../models/User')


const createMessage = async(req,res)=>{
    const {message,mobile} = req.body
    try {
        const user = await User.create({
            mobile,
            message
        })
       return res.status(200).json({success:true,msg:"message was successfully created"})
    } catch (error) {
        res.status(500).json({error:error.message,msg:"error creating message"})
    }
}

const getAllUserMeggages = async(req,res)=>{
  try {
    const messages = await User.find()
    if(messages){
        return res.status(200).json({success:true,msg:"messages were successfully fetched"})
    }
    else{
        res.status(404).json({success:true,msg:"no user found"})
    }
  } catch (error) {
    res.status(500).json({error:error.message,msg:"error getting all user message"})
  }
}

const getSingleUserMessgae = async(req,res)=>{
    const mobile = req.body.mobile
  try {
    const user = await User.findOne({ mobile: mobile})
    if(user){
        return res.status(200).json({success:true,msg:"messages were successfully fetched"})
    }
    else{
        res.status(404).json({success:true,msg:"no user found"})
    }
  } catch (error) {
    res.status(500).json({error:error.message,msg:"error getting all user message"})
  }

}

const deleteMessage = async(req,res)=>{

}


module.exports ={
    createMessage,
    getAllUserMeggages,
    getSingleUserMessgae,
    deleteMessage
}