const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const videoSchema = new Schema({
    name: String,
    url: String,
    age: String

});

module.exports = mongoose.model('video', videoSchema, 'proje')

