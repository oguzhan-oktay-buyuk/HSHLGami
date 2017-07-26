const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lectureSchema = new Schema({
    name: String,
    grade: String
});

module.exports = mongoose.model('lecture', lectureSchema, 'lecture')