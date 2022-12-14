require('dotenv-safe').config()
const DATABASE_URI = process.env.DATABASE_URI
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

const connect = async() => {
    try {
        mongoose.connect(DATABASE_URI, 
            { useNewUrlParser: true, useUnifiedTopology: true })
            console.log('MongoDb connect')
    } catch (error) {
        console.error(error)
    }
};

module.exports = {connect}