const express = require("express");
const cors = require('cors');
const routerPerson = require('../src/routes/personRoute');
const APP = express();
const PORT = 3003;
const db = require('./infra/db');


db.sync(); 


APP.use(express.json()); 


APP.use(cors( {origin: '*'} )); 

try{
    APP.use('/people', routerPerson);
    
    APP.listen(PORT, () => {
        console.log(`Running in http://localhost:${PORT}`);
    });
}catch(error){
    console.log(error);
}


