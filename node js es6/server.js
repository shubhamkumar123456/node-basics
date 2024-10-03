import express from 'express';
const app = express();
const port  = 8080
app.get('/',(req,res)=>{
    res.send('Welcome')
})



app.listen(port,()=>{
    console.log(`server listening on port ${port} on http://localhost:8080`);
});