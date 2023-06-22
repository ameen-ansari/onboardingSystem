const mongoose = require('mongoose')

const dbConnector = async () => {
    try {
        await mongoose.connect('mongodb+srv://ameen:ansari@cluster0.tfno3ib.mongodb.net/');
        console.log('dbConnected...');
        return true
    } catch (error) {
        console.log('while db_connection', error);
        return false
    }
}

module.exports = {
    dbConnector
}

