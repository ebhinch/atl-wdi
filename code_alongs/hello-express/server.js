// 9.18.17 code along

const express = require('express');
const app = express();

//   LAB 1. Make routes for add, subtract, multiply, divide that will take two numbers as query parameters num1 and num2 and perform the operation specified in the rout,e and send those answers to the browser.

app.get('/add', (request, response) => {
    const num1 = parseInt(request.query.num1);
    const num2 = parseInt(request.query.num2);
    response.send(`the sum is ${num1 + num2}`);
})


app.get('/', (request, response) => {
  response.send("hello wdi12");
});

app.get('/greeting', (request, response) => {
    response.send("hey wdi12");
  });

  app.get('/rihanna', (request, response) => {
    response.send("work work work work");
  });

  app.get("/:name", (request, response) => {
      response.send(`Hello, ${request.params.name}`);
  });

  app.get("/food/:food/toppings/:topping", (request, response) => {
      response.send(`I really love ${request.params.food} with ${request.params.topping}`);
  });


const PORT = 3000;

app.listen(PORT, () => {
  console.log("Express is listening on port ", PORT);
});