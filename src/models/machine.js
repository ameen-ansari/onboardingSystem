const mongoose = require("mongoose");

const machineSchema = mongoose.model('devices', new mongoose.Schema({
    serialnumber: {
        required: true,
        type: String,
    },
    machinename: {
        required: true,
        type: String,
    },
    location: {
        required: true,
        type: String,
    },
    maintainance: {
        required: true,
        type: String,
    }
}));

module.exports = machineSchema