const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/sampledb';

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},(e)=>{
    if(e) throw e;
    console.log(`Succesfully Connected To Database!`);
});

require('./employee.model');