const express = require("express");
const app = express();
const hbs = require("hbs");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

//create controllers
const todontsController = require("./controllers/index");
//declare what our url will be. this will communiate with the index required above

app.use(methodOverride("_method"));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/todonts", todontsController);

//tells our app to use handlebars
app.set("view engine", "hbs");


app.get("/", (req, res) => {
    res.send("this is our homepage");
})



//sets up port to listen on 3001
const port = 3001
app.listen(port, () => {
    console.log("Express is listening....", port);
}); 