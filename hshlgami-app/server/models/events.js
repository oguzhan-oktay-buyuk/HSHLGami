const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventsSchema = new Schema({
    name: String,
    date: String,
    duration: String
});

module.exports = mongoose.model('events', eventsSchema, 'event')

