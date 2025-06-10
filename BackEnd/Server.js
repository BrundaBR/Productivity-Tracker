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
app.use(express.static('pulic'));
app.use(morgan('dev'))

//mongo connection
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlPaser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("conneted to database"))
.catch((err) => console.error("Error in connection to database", err));


//routes
app.get('/', (req, res)=>{
    res.render('index')
})

//listning to port 4000
app.listen(4000)

