const express = require('express');
const connectToDB = require('./db')
const cors = require('cors')
const app = express();
const port  = 8080;
connectToDB()

//routes
const userRoutes = require('./routes/user')
const postRoutes = require('./routes/post')
const categoryRoutes = require('./routes/category')

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(cors())
app.get('/', (req, res) => {
    res.send("welcome")
})


app.use('/users',userRoutes)
app.use('/posts',postRoutes)
app.use('/category',categoryRoutes)



app.listen(port,()=>{
    console.log( `listening on port ${port} on http://localhost:${port}`)
});