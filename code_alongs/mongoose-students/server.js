const express = require('express');
const mongoose = require("mongoose");
const hbs = require("hbs");

//create express instance when loading
const app = express();

//connect mongoose
mongoose.connect('mongodb://localhost/students');

//tell server to use hbs as view engine
//make usr to put quotes around hbs below - like "hbs"
app.set("view engine", "hbs");

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














const port = 3000;
app.listen(port, () => {
    console.log(`Express started on ${port}`)
})

