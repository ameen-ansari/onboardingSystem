const mongoose = require("mongoose");

const deviceSchema = mongoose.model('machines', new mongoose.Schema({
    equipmentcode: {
        required: true,
        type: String,
    },
    equipmentname: {
        required: true,
        type: String,
    },
    location: {
        required: true,
        type: String,
    },
    range: {
        required: true,
        type: String,
    }
}));

module.exports = deviceSchema