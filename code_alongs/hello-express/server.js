// 9.18.17 code along
// continued on 9.19.17

const express = require('express');
const app = express();

//tell app to require Handlebars
const hbs = require("hbs");

//tell Express to use Handlebars
app.set("view engine", "hbs");

//make everything available in public file available here
//"dirname" what you get when you "pwd" in terminal
app.use(express.static(__dirname + '/public')); 

//9.19.17
app.get("/greeting", (req, res) => {
  //this will console log any query you put in url
  console.log(req.query);

  //tells the name of the view to be looking at. the seconditem is an object. defining keyhs inside the data object
  res.render("greeting", {
    data: req.query.saying,
    name: "Erica"
  });

})

app.get("/favorite-foods", (req, res) => {
  var favoriteFoods = ["Jeni's Almond Butter ice cream", 'Tacos from Superica', 'A Breakfast Sandwich from Gjelina to go in Venice', 'Croissants from Bottega Louie in Downtown Los Angeles', 'Pizza from Little Star in San Francisco'];
  
  res.render("favorite-foods", {
    //object-- key: value
    favoriteFoods: favoriteFoods
  });
})




// 9.18,17
// //   LAB 1. Make routes for add, subtract, multiply, divide that will take two numbers as query parameters num1 and num2 and perform the operation specified in the rout,e and send those answers to the browser.

// app.get('/add', (request, response) => {
//     const num1 = parseInt(request.query.num1);
//     const num2 = parseInt(request.query.num2);
//     response.send(`the sum is ${num1 + num2}`);
// })


//The below does all four math operations in one function
// app.get('/math/:operator', (req, res) => {
//   const num1 = parseInt(req.query.num1);
//   const num2 = parseInt(req.query.num2);
//   if (req.params.operator === "add") {
//       res.send(`${num1 + num2}`);
//   } else if (req.params.operator === "subtract") {
//       res.send(`${num1 - num2}`);
//   } else if (req.params.operator === "divide") {
//       res.send(`${num1 / num2}`);
//   } else if (req.params.operator === "multiply") {
//       res.send(`${num1 * num2}`);
//   } else {
//       res.send("invalid")
//   }
// });


// app.get('/', (request, response) => {
//   response.send("hello wdi12");
// });

// app.get('/greeting', (request, response) => {
//     response.send("hey wdi12");
//   });

//   app.get('/rihanna', (request, response) => {
//     response.send("work work work work");
//   });

//   app.get("/:name", (request, response) => {
//       response.send(`Hello, ${request.params.name}`);
//   });

//   app.get("/food/:food/toppings/:topping", (request, response) => {
//       response.send(`I really love ${request.params.food} with ${request.params.topping}`);
//   });


const PORT = 3000;

//app.listen allows our server to hang out and not close and wait for requests to come in. meaning program will run consistently and won't close out
app.listen(PORT, () => {
  console.log("Express is listening on port ", PORT);
});