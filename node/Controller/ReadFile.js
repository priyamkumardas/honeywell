const file= require('../Model/Field.json');

const readFileFn= async()=>{
    try{
        const data = await fs.readFile(file,'utf8');
        res.send(data);
    } catch (err){
        console.error(err);
        res.status(500).send('Error reading file');
    }
}

module.exports = {
    readFileFn,
}