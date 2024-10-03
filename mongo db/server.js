const express = require('express')
const app = express()
const db = require('./db');


app.use(express.json());
app.get('/', async(req, res) => {
    let result = await db();
     let response = await result.find({}).toArray()
    console.log(response)
    res.send(response)
    // res.send(result);
})

app.post('/signup', async(req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    let result = await db();
    let response = await result.insertOne({
        name,
        email,
        password
    })
    res.send("signup successfully")
})


app.put('/update',async(req, res) => {
    let data = await db();
    let response = await data.findOneAndUpdate({email: req.body.email},
        {$set:{password:req.body.newPassword}})
        res.send("updated successfully")
})

app.delete('/delete',async(req,res)=>{
    let data =  await db();
    let response = await data.deleteOne({email: req.body.email})
    res.send("deleted successfully"); 
})
app.listen(5000,()=>{
    console.log('server is lisetning on port 5000')
})