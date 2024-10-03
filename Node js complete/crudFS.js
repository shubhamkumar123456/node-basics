const fs = require('fs');
const path = require('path');
// create a new file
fs.writeFileSync('apple.txt',"this is a simple text file") // create a new file

//read file

// fs.readFile('apple.txt','utf-8',function(err,item){
//     console.log(item); // give answer in buffer format
// })

// add more text in  existing file

// fs.appendFile('apple.txt','hello this is additional text',(err)=>{
//     if(!err){
//         console.log("file is updated")
//     }
// })

//rename a file

// fs.rename('apple.txt','fruit.txt',(err)=>{
//     if(!err){
//                console.log("file is updated")
//       }
// })

//delete a file

fs.unlinkSync('fruit.txt');