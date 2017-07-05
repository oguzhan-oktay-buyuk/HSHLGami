const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gradsSchema = new Schema({
    year: String
});

module.exports = mongoose.model('grads', gradsSchema, 'grads')