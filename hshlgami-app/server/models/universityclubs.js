const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const universityclubsSchema = new Schema({
    name: String
});

module.exports = mongoose.model('universityclubs', universityclubsSchema, 'universityclubs')

