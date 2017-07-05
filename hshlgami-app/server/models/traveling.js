const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const travelingSchema = new Schema({
    name: String,
    typ: String
});

module.exports = mongoose.model('traveling', travelingSchema, 'traveling')