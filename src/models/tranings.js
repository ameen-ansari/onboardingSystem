const mongoose = require('mongoose');

const trainingSchema = new mongoose.Schema({
    year: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    weeks: {
        type: [String],
        required: true
    }
});

const dataSchema = new mongoose.Schema({
    trainingInfo: {
        type: [trainingSchema],
        required: true
    },
    trainingName: {
        type: String,
        required: true
    }
});

const training = mongoose.model('Data', dataSchema);

module.exports = training;
