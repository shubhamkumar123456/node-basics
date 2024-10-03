const User = require('../models/User')
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
const createUser = async(req,res)=>{
    const {name,email,password,phone} = req.body;
    
        const existsUser = await User.findOne({email});
        if(existsUser){
            return res.status(200).json({success:false,msg:"User already exists"})
        }
        try {
            const hashedPassword = await bcrypt.hashSync(password,salt)
        const user = await User.create({
            name,
            email,
            password:hashedPassword,
            phone
        })
        res.status(200).json({success:true,msg:"User created successfully"})
    } catch (error) {
        res.status(500).json({success:false,msg:"Error in creating user",error:error.message})
    }
}

const loginUser = async(req,res)=>{
    const {email, password} = req.body;
   try {
    const user = await User.findOne({email: email});
    if(user){
        const checkPassword = await bcrypt.compareSync(password, user.password)
        if(checkPassword){
            return res.status(200).json({success:true,msg:"login successfull", user});
        }
        else{
            return res.status(500).json({success:false,msg:"Invalid credentials"});
        }
    }else{
        res.status(404).json({success:false,msg:"user not found"});
    }
   } catch (error) {
    res.status(500).json({success:false,msg:"Error in log in user",error:error.message})
   }
}

const updateUser = async(req,res)=>{
    const {name,password} = req.body;
    let hashedPassword;
    if(password){
            hashedPassword = bcrypt.hashSync(password,salt);
    }
    const _id = req.params._id;
  try {
    const user = await User.findByIdAndUpdate(_id, {$set:{name:name,password:hashedPassword}});
    return res.status(200).json({success:true,msg:"User updated successfully"});
  } catch (error) {
    res.status(500).json({success:false,msg:"Error in updating user",error:error.message})
  }

    
}

const deleteUser = async(req,res)=>{
    try {
        let user = await User.findByIdAndDelete({_id:req.params.id})
    res.status(200).json({success:true,msg:"Account deleted successfully"})
    } catch (error) {
        res.status(500).json({success:false,msg:"Error in deleting user",error:error.message})
    }
}

module.exports ={
    createUser,
    updateUser,
    loginUser,
    deleteUser
}