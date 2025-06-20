const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb+srv://Prash1001:pass123@timemanagment.2xc0ylj.mongodb.net/?retryWrites=true&w=majority&appName=TimeManagment')
.then(() => console.log("conneted to database"))
.catch((err) => console.error("Error in connection to database", err));

module.exports = connection;