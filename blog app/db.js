const mongoose = require('mongoose');

const connectToDB = async()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/blog')
  .then(() => console.log('Connected to mongoDB!'))
  .catch(() => console.log('error connecting to mongoDB'))
}

module.exports = connectToDB;