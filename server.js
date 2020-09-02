const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

require('./models/db');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.urlencoded({extended:true}));

app.use('/employee',require('./routes/controller'));

const port = process.env.PORT || 3000;

app.listen(port,(e)=>{
    console.log(`Server is on port : ${port}`);
});