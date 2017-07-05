const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dictionarySchema = new Schema({
    name: String
});

module.exports = mongoose.model('dictionary', dictionarySchema, 'dictionary')