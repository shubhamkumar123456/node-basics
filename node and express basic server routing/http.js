const http = require('http');
const Port = 4000;
const host = 'localhost';

//making server route without html file
// const server = http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.write('welcome to the home page');
//         res.end()
//     }
//     if(req.url==='/about'){
//         res.write('welcome to the About page');
//         res.end()
//     }
//     if(req.url==='/contact'){
//         res.write('welcome to the Contact page');
//         res.end()
//     }
// })

//making route using html file
const fs  = require('fs');
const path = require('path');
const publicPath = path.join(__dirname, 'public');
console.log(publicPath)
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
       const page =  fs.readFileSync(publicPath+'/index.html')
        res.end(page)
    }
    if(req.url==='/about'){
        const page =  fs.readFileSync(publicPath+'/about.html')
        res.end(page)
    }
    if(req.url==='/contact'){
        const page =  fs.readFileSync(publicPath+'/contact.html')
        res.end(page)
    }
})

server.listen(Port,host,()=>{
    console.log(`server is listening on port ${Port}`);
})