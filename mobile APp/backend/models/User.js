const mongoose  = require('mongoose')
const userSchema = new mongoose.Schema({
    mobile:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{timeseries:true})
module.exports = mongoose.model('User', userSchema)