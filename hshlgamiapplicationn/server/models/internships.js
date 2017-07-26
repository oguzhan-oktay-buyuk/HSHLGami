const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const internshipsSchema = new Schema({
    name: String,
    typ: String,
    is_internship_foreign: String // true or false.
});

module.exports = mongoose.model('lecture', internshipsSchema, 'lecture')