const express = require('express');
const mongoose = require("mongoose");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

//create express instance when loading
const app = express();

//connect mongoose
mongoose.connect('mongodb://localhost/students');


//tell server to use hbs as view engine
//make usr to put quotes around hbs below - like "hbs"
app.set("view engine", "hbs");

//use body-parser
//tells app to use body-parser as middleware
//set up middleware below view engine
app.use(bodyParser.urlencoded({extended: true}))

//method override is also middleware. says - before request hits controller, look and see if method for request has "_method" on it, use it instead
//says - look at every method before running, and if it is "_method" within it, override it with what follows it
//you don't have to use "_method", you could set to whatever you want including "***" -- whatever you use to designate just tells app what to look for
app.use(methodOverride("_method"));

//add an index controller
//redirect to "/students"
app.get("/", (request, response) => {
    response.redirect("/students")
})

const db = mongoose.connection;

// Will log an error if db can't connect to MongoDB
db.on('error', function (err) {
    console.log(err);
});

// Will log "database has been connected" if it successfully connects.
db.once('open', function () {
    console.log("database has been connected!");
});

const studentsController = require('./controllers/students_controller');
app.use('/students', studentsController);

// add in projects controller - this will be used for projects (embedded documents)
const projectsController = require("./controllers/projects_controller");
// "projects" only exists within "students" so below is the file path
app.use("/students/:studentId/projects", projectsController);

const port = 3000;
app.listen(port, () => {
    console.log(`Express started on ${port}`)
})

