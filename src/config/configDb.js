const mongoose = require('mongoose')

const dbConnector = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('dbConnected...');
    } catch (error) {
        console.log('while db_connection', error);
    }
}

module.exports = {
    dbConnector
}