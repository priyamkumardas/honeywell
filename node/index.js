const express =require('express');
const fs = require('fs').promises;

const app = express();
const port = 3000;

app.get('/readfile',async(req,res)=>{
    try{
        const data = await fs.readFile('example.txt','utf8');
        res.send(data);
    } catch (err){
        console.error(err);
        res.status(500).send('Error reading file');
    }
})

app.listen(port,()=>{
    console.log(`Server is running`);
})