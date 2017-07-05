const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const organizationSchema = new Schema({
    name: String
});

module.exports = mongoose.model('organization', organizationSchema, 'organization')