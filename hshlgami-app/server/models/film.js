const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const filmSchema = new Schema({
    name: String,
    typ: String
});

module.exports = mongoose.model('film', filmSchema, 'film')