const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const languageexamSchema = new Schema({
    name: String,
    grade: String
});

module.exports = mongoose.model('languageexam', languageexamSchema, 'languageexam')

