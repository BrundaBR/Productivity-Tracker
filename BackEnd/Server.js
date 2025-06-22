//libraries
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

//view engine
app.set('view engine','ejs')   

//middleware
app.use(cors());
app.use(express.json());

//routes
app.get('/', (req, res)=>{
    res.render('index')
})

//listning to port 4000
app.listen(4000)

