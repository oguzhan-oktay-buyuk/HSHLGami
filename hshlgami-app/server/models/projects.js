const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectsSchema = new Schema({
    name: String,
    area: String
});

module.exports = mongoose.model('projects', projectsSchema, 'projects')