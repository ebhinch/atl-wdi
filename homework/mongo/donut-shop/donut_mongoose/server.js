//======================
// REQUIREMENTS
//======================
// require express, mongoose, body-parser, method-override
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const hbs = require("hbs");
const logger = require('morgan');

const app = express();

//you need the next line here as well as in model
mongoose.Promise = global.Promise;
//connect mongoose
//you don't have to actually create "donut_store" from command line in mongoose b/c mongoose will create it for you the first time you use it
mongoose.connect('mongodb://localhost/donut_store');

//CONNECT MONGOOSE TO "donut_store"
//this is the variable that represents the connection we will have to mongoose.
//you need to use this mongoose.connection object
const db = mongoose.connection;

//the next bits of code help us see if mongoose is connected or if we have an error
db.on('error', function (err) {
    console.log(err)
})

// Will log "database has been connected" if it successfully connects.
db.on('open', function () {
    console.log("database has been connected!");
});


//======================
// MIDDLEWARE
//======================
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.set("view engine", "hbs");
app.set('views', './views');

app.use(express.static(__dirname + 'public'));
app.use( logger('dev'));

//======================
// CONTROLLERS
//======================
//for seed file, seed the database
var seedController = require('./controllers/seeds.js');
//first argument in app.use("") is the preface for all urls / routes moving forward 
app.use('/seed', seedController);

//for root directory, show all donuts
var donutsController = require('./controllers/donuts.js');
app.use('/', donutsController);

//======================
// LISTENERS
//======================



//CREATE THE MONGOOSE CONNECTION and SET APP TO LISTEN to 3000
const port = 3000;
//app.listen: first argument is "port" 
app.listen(port, () => {
    console.log(`Express started on ${port}`)
})

