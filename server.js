// Express
var express = require('express');
var app = express();
var users = require('./node_modules/routes/users.js');
var cors = require('cors');
app.use(cors());

// Mongodb
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var objectID = mongodb.ObjectID;
var url = 'mongodb://phil123:birlund123@ds011472.mlab.com:11472/phmandatorydb';

// Request body parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/', require('./node_modules/routes/users.js'))



app.listen(process.env.PORT ||3000);

