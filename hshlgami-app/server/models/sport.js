const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sportSchema = new Schema({
    typ: String
});

module.exports = mongoose.model('sport', sportSchema, 'sport')