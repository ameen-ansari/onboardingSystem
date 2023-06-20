const mongoose = require("mongoose");

const qaUserSchema = mongoose.model('pendingemployees', new mongoose.Schema({
    department: {
        required: true,
        type: String,
    },
    jobTitle: {
        required: true,
        type: String,
    },
    section: {
        required: true,
        type: String,
    },
    station: {
        required: true,
        type: String,
    },
    supervisor: {
        required: true,
        type: String,
    },
}));

module.exports = qaUserSchema