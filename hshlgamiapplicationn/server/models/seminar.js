const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const seminarSchema = new Schema({
    name: String,
    seminar_in: String, // true oder false
    seminar_out: String // true oder false
   
});

module.exports = mongoose.model('seminar', seminarSchema, 'seminar')

