const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors')
const connectToDb = require('./db')
connectToDb()

const userRoutes = require('./routes/user')
const imageRoutes = require('./routes/images')

app.use(cors())
app.use(express.json({limit:"50mb"}));

app.get('/',(req,res)=>{
    res.send("welcome page")
})


app.use('/user',userRoutes)
app.use('/pic',imageRoutes)




app.listen(port,()=>{
    console.log("listening on port",port);
})