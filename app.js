const express = require('express');
const cors = require('cors');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const db = require('./models/db');

const app = express();

const PORT = process.env.PORT || 3000;

// app.use(cors());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended:true}));

app.use('/employee',require('./routes/connector'));

app.listen(PORT,(e)=>{
    if (e) {
        throw e;
    }
    console.log(`Server is on port : ${PORT}`);
});
