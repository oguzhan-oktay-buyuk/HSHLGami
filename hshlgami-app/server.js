const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');

const api = require('./server/routes/api');

//Port Number
const port = 3000;

const app = express();

//CORS Middleware
app.use(cors());

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({extended: true}));

//Bodyparser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./server/routes/passport')(passport); 

app.use('/api', api); //Testing expressjs functionality

//Index route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Start Server
app.listen(port, function(){
    console.log("Server running on localhost:" + port);
})