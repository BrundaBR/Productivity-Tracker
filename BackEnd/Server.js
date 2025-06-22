//libraries
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const userModel = require('./models/user')
require('dotenv').config();
    const connection = require('./config/db')
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

app.get('/profile',(req,res)=>{
    res.send('this is the profile')
})
//sending data to mongodb
app.post('/get-form', async (req,res)=>{

    const {username, password, email} = req.body
    const createNewuser = await userModel.create({
        username : username,
        password : password,
        email : email,
    })
    res.send('submitted')
})

//reading the data 
app.get('find-user', (req,res) => {
    userModel.find().then((users)=>{
        res.send(users)
    })
})


//listning to port 4000
app.listen(4000)

