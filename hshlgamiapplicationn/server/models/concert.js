const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const concertSchema = new Schema({
    name: String,
    singername: String
});

module.exports = mongoose.model('concert', concertSchema, 'concert')

