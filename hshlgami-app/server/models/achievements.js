const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const achievemensSchema = new Schema({
    name: String,
    typ: String
});

module.exports = mongoose.model('achievements', achievemensSchema, 'achievement')