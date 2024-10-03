const express = require('express');
const path = require('path');
const app = express();
const port  = 5000;

const publicPath = path.join(__dirname, 'public') // this can access any file inside public folder
app.use(express.static(publicPath));
app.get('/', (req, res) => {
    res.send("Welcome")
})
app.get('/home', (req, res) => {
    res.send("home")
})
// app.get('/about', (req, res) => {
//     res.send("about")
// })
app.get('/*', (req, res) => {
    res.send("Page not found")
})


app.listen(port,()=>{
    console.log('listening on port ',port)
});