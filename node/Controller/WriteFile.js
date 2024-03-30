const file= require('../Model/Field.json');
const fs = require('fs').promises;
const WriteFileFn= async(req,res)=>{
    //console.log(req.body);
    try{
        const data = await fs.writeFile("./data.json",JSON.stringify(req.body));
        console.error(data);
        res.send(data);
    } catch (err){
        console.error(err);
        res.status(500).send('Error writing file');
    }
}

module.exports = {
    WriteFileFn,
}