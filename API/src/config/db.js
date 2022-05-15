/* MYSQL DB SETUP */
module.exports = require("knex")({
    ...require('../../knexfile').development
})

/* MONGO DB SETUP */

const MONGODB_URI = 'mongodb://localhost:27017/ChatApp?retryWrites=true'

const mongoose = require("mongoose");

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
}, (error, _db) => {
    if (error) throw error
    console.log(`MongoDB  Connected!!`);
})

mongoose.Promise = global.Promise;