const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const studentsSchema = mongoose.Schema({
    name: {
        type:String
    },
    surname: { 
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    phoneNumber:
    { type:String
    },
    points: 
    {
        type: String
    }
    //points: String
});

const Students = module.exports = mongoose.model('students', studentsSchema, 'student');

module.exports.getStudentsById = function(id, callback) {
    Students.findById(id, callback);
}

module.exports.getStudentsByEmail = function(email, callback) {
    const query = {email: email}
    Students.findOne(query, callback);
}

module.exports.addStudent = function(newStudent, callback){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newStudent.password, salt, (err, hash) => {
            if(err) throw err;
            newStudent.password = hash;
            newStudent.save(callback);
        });
    });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
});
}