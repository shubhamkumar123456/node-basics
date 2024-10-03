const http = require('http');
const port = 4000;
const data = require('./data');
// const server = http.createServer((req, res) => {
//     console.log("Starting")
//     res.write("<h1>hello world</h1>")
//     res.end();
// })

// server.listen(port, () => {
//     console.log('listening on port ' + port);
// })
const server = http.createServer((req, res) => {

    if(req.url==='/'){
        res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>This is heading </h1>
</body>
</html>`)
    }
    if(req.url ==='/about'){
        res.write()
    }
    console.log("Starting")
    res.writeHead(200,{'Content-Type':'application/json'});
    // res.write(JSON.stringify({
    //     name:"abc",
    //     email:'abc@gmail.com',
    // }))
    res.write(JSON.stringify(data));
    res.end();
})

server.listen(port, () => {
    console.log('listening on port ' + port);
})