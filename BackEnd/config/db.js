require('dotenv').config();
const mongoose = require('mongoose');

const mongoUrl = process.env.MONGODB_URL;

const connection = mongoose.connect(mongoUrl)
.then(() => console.log("conneted to database"))
.catch((err) => console.error("Error in connection to database", err));

module.exports = connection;