const mongoose = require('mongoose')

const dbConnector = async () => {
    try {
        await mongoose.connect('mongodb+srv://ameen:ansari@cluster0.tfno3ib.mongodb.net/');
        console.log('dbConnected...');
    } catch (error) {
        console.log('while db_connection', error);
    }
}

module.exports = {
    dbConnector
}

