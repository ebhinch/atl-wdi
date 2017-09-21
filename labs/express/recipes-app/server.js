const express = require("express");
const hbs = require("hbs");
const PORT = process.env.PORT || 3000;
const recipesController = require("./controllers/rescontroller");
const app = express();

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.send("this is our homepage");
})









app.listen(PORT, function() {

});