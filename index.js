const express = require('express');
const cookieParser= require('cookie-parser');
const app = express();
const port = 7000;
const db = require('./config/mongoose');

app.use(express.urlencoded());
app.use(cookieParser());
//ejs setup
app.set('view engine','ejs');
app.set('views','./views');

//router setup
app.use('/',require('./routes'));
app.use(express.static('./assets'))

app.listen(port,(err)=>{
    if(err){
        console.log("Error",err);
    }
    console.log("Port available at :",port);
})