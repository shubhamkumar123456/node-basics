const mongoose = require('mongoose')
const imageSchema = new mongoose.Schema({
    photo:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Images',imageSchema);