const mongoose = require('mongoose')

const connectToDb=async()=>{
    await mongoose.connect('mongodb://0.0.0.0:27017/mobile')
    .then(()=>{console.log('Connected to mongo db successfully')})
    .catch(()=>{console.log('failed to connect to mongo db')})
}

module.exports =connectToDb