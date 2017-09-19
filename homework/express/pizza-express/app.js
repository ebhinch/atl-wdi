const express = require("express");
const app = express();
const hbs = require("hbs");
const toppingController = require("./controllers/topping.js");
const orderController = require ("./controllers/order.js");
const notfoundController = require("./controllers/notfound.js");

app.set("view engine", "hbs");
app.set("views", "./views");

app.use("/topping", toppingController);
app.use("/order", orderController);


app.get("/", (req, res) => {
    console.log(req.query);
    res.send("Welcome to Pizza Express!");
})

app.use("*", notfoundController);

const port = 3003;

app.listen(port, function(){
    console.log("==========================")
    console.log('LISTENING ON PORT ' + port);
    console.log("==========================")
  });

  
 
  