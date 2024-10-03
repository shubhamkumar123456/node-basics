
const fs = require('fs');
//create file
fs.writeFileSync('hello.txt', 'hello world')
// console.log(__dirname)
console.log(__filename);

// if you want to create a file inside a folder or directory
const path = require('path');
const dirPath = path.join(__dirname) // gives you current directory path
const dirPath1 = path.join(__dirname,'file') // give you folder path named file 
console.log(dirPath)
console.log(dirPath1)
// if you want to create multiple file iside a folder
for(let i=0 ; i<5; i ++){
    fs.writeFileSync(dirPath1+`/apple${i}.txt`,"a simple text file")
}
//read file  from a folder
fs.readdir(dirPath1,(err,files)=>{
    console.log(files)   //gives array of files
    files.forEach((file)=>{
        console.log(file) 
    })
})