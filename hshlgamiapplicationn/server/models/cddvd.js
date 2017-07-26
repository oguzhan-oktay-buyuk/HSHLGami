const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cddvdSchema = new Schema({
    name: String,
    typ: String
});

module.exports = mongoose.model('cddvd', cddvdSchema, 'cddvd')

