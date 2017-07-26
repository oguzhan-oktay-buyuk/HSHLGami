const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newfriendSchema = new Schema({
    name: String,
    singername: String
});

module.exports = mongoose.model('newfriend', newfriendSchema, 'newfriend')