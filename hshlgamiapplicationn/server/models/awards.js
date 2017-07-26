const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const awardsSchema = new Schema({
    name: String,
    typ: String,
    degree: String
});

module.exports = mongoose.model('awards', awardsSchema, 'awards')