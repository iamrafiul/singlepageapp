//modules

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

var db_obj = require('./app/models/nerd');

//config files
var db = require('./config/db');

var port = process.env.PORT || 8080;

//connect to mongoDB database
//uncomment if you have mongoDB installed for the nodejs. mongoDB has a driver for NodeJS name 'mongoose'
//mongoose.connect(db.url);

/*var Nerd = mongoose.model('Nerd'); //, { name: String });

var newNerd = new Nerd({ name: 'Manish' });

newNerd.save(function (err) {
    if (err) {
        console.log(err);
    }
    console.log('DONE');
});*/

//get all the data/stuff of the body (POST) parameters
app.use(bodyParser.json()); //app is an express object(see line 4) which is actually the ExpressJS MVC framework

//parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//parse application/x-www-for-urlencoded
app.use(bodyParser.urlencoded({ extend: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

//set the stati files location to /public/img will be /img for users
//if you have ever used python/django, you know these variables start with __, they
//are actually the system variables.
app.use(express.static(__dirname + '/public'));


//start the app
//the port for running the app in your local computer will be 8080(line 11) and
//the url should be http://localhost:8080
app.listen(port);

//shout out to the server
console.log('Magic happens on port ' + port);

//expose app
exports = module.exports = app;