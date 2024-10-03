const express = require('express');
const path = require('path');
const app = express();
const port  = 5000;

const publicPath = path.join(__dirname, 'public') 
// app.use(express.static(publicPath)); //with the help of this you need to provide extension always
app.get('/', (req, res) => {
    res.sendFile(`${publicPath}/index.html`) // with this you do not need to provide extension like .html on route
})

app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`)
})
app.get('/*', (req, res) => {
    res.send("Page not found")
})


app.listen(port,()=>{
    console.log('listening on port ',port)
});