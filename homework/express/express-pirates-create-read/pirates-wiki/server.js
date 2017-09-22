/* packages */
const express = require('express');
const hbs  = require('hbs');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

/* app settings*/
const app = express();
const port = 3000;

var pirateController = require('./controllers/pirates.js');


app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({
    extended: true
}));


app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.send("tharrrr you are");
});

//controllers for `/pirates` resource
app.use("/pirates", pirateController);

app.use(express.static(__dirname + '/public')); 




// Start server
app.listen(port, function() {
    console.info('Server Up', port,"//", new Date());
  });


  

