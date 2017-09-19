const express = require("express");
const app = express();
const hbs = require("hbs");
app.set("view engine", "hbs");
app.set("views", "./views");

app.get("/", (req, res) => {
    console.log(req.query);
    res.send("Welcome to Pizza Experss!");
})

app.get("/topping/:type", (req, res, next) => {
    const type = req.params.type;
    res.send(`${type} pizza! Good choice.`)

})

app.get("/order/:amount/:size", (req, res, next) => {
    const amount = req.params.amount;
    const size = req.params.size;
    res.send(`Your order for ${amount} ${size} pizzas will be ready in 1 minute!`);

})



const port = 3003;

app.listen(port, function(){
    console.log("==========================")
    console.log('LISTENING ON PORT ' + port);
    console.log("==========================")
  });