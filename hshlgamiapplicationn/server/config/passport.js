const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Students = require("../models/students");
const config = require("./databasesecret");

module.exports = function(passport){
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        Students.getStudentsById(jwt_payload._doc._id, (err, students) => 
        {
            if(err){
                return done(err,false);
            }
            if(students){
                return done(null, students);

            }else {
                return done(null, false);
            }
        });
    }));
}