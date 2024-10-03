const express =  require('express');
const app = express();
const port  = 5000

//making normal request using express
// app.get('/', (req, res) => {
//     res.send("welcome to home page in express js")
// })
// app.get('/about', (req, res) => {
//     res.send("welcome to about page in express js")
// })
// app.get('/contact', (req, res) => {
//     res.send("welcome to contact page in express js")
// })
// app.get('/*', (req, res) => {
//     res.send("page not found in express js")
// })


//making route using public folder files

const path = require('path');
const publicPath = path.join(__dirname, 'public')
app.use(express.static(publicPath));
app.get('/', (req, res) => {
    // res.render(publicPath+'index')
    res.sendFile(publicPath+'/index.html')
})
app.get('/about', (req, res) => {
    res.sendFile(publicPath+'/about.html')
})
app.get('/contact', (req, res) => {
    res.sendFile(publicPath+'/contact.html')
})

app.listen(port,()=>{
    console.log('listening on port ',port);
});