const file= require('../Model/Field.json');
const fs = require('fs').promises;
const readFileFn= async(req,res)=>{
    try{
        const data = await fs.readFile("./Model/Field.json",'utf8');
        console.error(data);
        res.send(data);
    } catch (err){
        console.error(err);
        res.status(500).send('Error reading file');
    }
}

module.exports = {
    readFileFn,
}