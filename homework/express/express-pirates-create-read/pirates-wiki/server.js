/* packages */
const express = require('express');
const hbs  = require('hbs');
const bodyParser = require('body-parser');

/* app settings*/
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));


app.set("view engine", "hbs");

//controllers for `/pirates` resource
var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);

app.use(express.static(__dirname + '/public')); 




// Start server
app.listen(port, function() {
    console.info('Server Up', port,"//", new Date());
  });