const Image = require('../models/Images')

const creataImage = async(req,res)=>{
    const photo = req.body.photo
 try {
    const image = await Image.create({
        photo
    })
    res.status(200).json(image)
 } catch (error) {
    res.status(500).json({ error: error.message,msg:"error in creatig image" })
 }

}

const updateImage = async(req,res)=>{
    console.log(req.params.id)
    console.log(req.body.photo)
    try {
        const image = await Image.findByIdAndUpdate({_id:req.params.id},{$set:{photo:req.body.photo}},{new:true})
    return res.status(200).json({msg:"image updated successfully" ,image})
    } catch (error) {
       res.status(500).json({msg:"error updating image",error:error.message}) 
    }
}

const getAllImages = async(req,res)=>{
    const images = await Image.find({})
  if(images){
    res.json(images)
  }else{
    res.json({msg: 'No images found'})
  }
}


module.exports ={
    creataImage,
    updateImage,
    getAllImages
}