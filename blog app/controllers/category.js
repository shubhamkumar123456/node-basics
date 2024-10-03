
const Category = require('../models/Category')

const createCategory = async(req,res)=>{
   try {
    const category = await Category.create({
        name:req.body.name
    })
   return res.status(200).json({msg:"category created successfully",success:true})
   } catch (error) {
        return res.status(500).json({msg:"error creating category",error:error.message})
   }
}

const getAllcategories = async(req,res)=>{
    try {
        const category = await Category.find()
        if(category){
            return res.status(200).json({msg:"category fetched successfully",success:true,category})
        }
        else{
           return res.status(404).json({msg:"no category found",success:true})
        }
    } catch (error) {
        return res.status(500).json({msg:"error getting category",error:error.message,success:false})
    }
}

const deleteCategory = async(req,res)=>{
    try {
        const category = await Category.findByIdAndDelete({_id:req.params.id})
    res.status(200).json({msg:"category deleted successfully" , success: true})
    } catch (error) {
        return res.status(500).json({msg:"error in deleting category",error:error.message,success:false})
    }
}

module.exports = {
    createCategory,
    getAllcategories,
    deleteCategory
}



