const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const summerSchoolSchema = new Schema({
    name: String,
    location: String
});

module.exports = mongoose.model('summerschool', summerSchoolSchema, 'summerschool')