const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require("../config/databasesecret");
const Video = require('../models/video');
const Students = require('../models/students');

const db = "mongodb://hshlgamidevelopers:MUHAHA123@ds147072.mlab.com:47072/hshlgamidb";
mongoose.Promise = global.Promise

mongoose.connection.on('connected', () => {
    console.log('Connected to database');
});

mongoose.connect(db, function(err){
    if(err){
        consolo.error("Error! "+ err);
    }
});
/*router.get('/', function(req, res){
    res.send('api works');
});*/

//Register
router.post('/register', (req, res, next) => 
{
    let newStudent = new Students({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        points: req.body.points
    });
    Students.addStudent(newStudent, (err, students) => {
        if(err){
            res.json({success: false, msg: 'Failed to register'});
        }else {
            res.json({success: true, msg: 'Student registered.'});
        }
    });
});

//Authentication
router.post('/authenticate', (req, res,next) => 
{
    const email = req.body.email;
    const password = req.body.password;

    Students.getStudentsByEmail(email, (err, students) => {
        if(err) throw err;
        if(!students){
            return res.json({success: false, msg: 'Student not found.'});
        }
        Students.comparePassword(password, students.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch) {
                const token = jwt.sign(students, config.secret, {
                    expiresIn: 604800 // 1 week
                });
                res.json({
                    success: true,
                    token: 'JWT ' +token,
                    students: {
                        id: students._id,
                        name: students.name,
                        surname: students.surname,
                        email: students.email,
                        address: students.address,
                        phoneNumber: students.phoneNumber,
                        points: students.points
                    }
                });
            }else {
                    return res.json({success: false, msg: 'Wrong password.'});
            }
        });
    });
});

//Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), function(req, res) {
    res.json({students: req.students});
});

//Validate
router.get('/validate', function(req, res){
    res.send('VALIDATE');
});

router.get('/videos', function(req, res){
    console.log('Get request for all videos');
    Video.find({})
        .exec(function(err, videos){
            if (err) {
                console.log("Error retreving videos");
            }else {
                res.json(videos);
            }
        });
});


router.get('/videos/:id', function(req, res){
    console.log('Get request for a single video');
    Video.findById(req.params.id)
        .exec(function(err, video){
            if (err) {
                console.log("Error retreving video");
            }else {
                res.json(video);
            }
        });
});

router.post('/video', function(req, res){
    console.log('Post a video');
    var newVideo = new Video();
    newVideo.name = req.body.name;
    newVideo.url = req.body.url;
    newVideo.age= req.body.age;
    newVideo.save(function(err, insertedVideo)
    {  
        if (err) {
            console.log('Error saving video');
        }else {
            res.json(insertedVideo);
        }
    });
});

router.put('/video/:id', function(req, res){
    console.log('Update a video');
    Video.findByIdAndUpdate(req.params.id,
    {
        $set: {name: req.body.name, url: req.body.url, age: req.body.age}
    },
    {
        new: true
    },
    function(err, updatedVideo)
    {
        if (err) {
            res.send("Error updation video.");
        }
        else{
            res.json(updatedVideo);
        }
    }
    );
});

router.delete('/video/:id', function(req, res){
    console.log('Deleting a video');
    Video.findByIdAndRemove(req.params.id, function(err, deletedVideo)
    {
        if(err){
            res.send("Error deleting video");
        }
        else {
            res.json(deletedVideo);
        }
    });
    
});

module.exports = router;