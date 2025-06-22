const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://0.0.0.0/Productivity-Tracker')
.then(() => console.log("conneted to database"))
.catch((err) => console.error("Error in connection to database", err));

module.exports = connection;