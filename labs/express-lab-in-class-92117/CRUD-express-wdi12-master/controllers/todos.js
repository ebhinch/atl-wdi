const express = require("express");
const router = express.Router();
const data = require("../data.js");

/* INDEX TODOS */
router.get('/', (req,res) => {
  console.log(data);
  res.render('todos/index', {
    todos: data.seededTodos
  });
});



/* SHOW TODOS */
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = data.seededTodos[id];
  console.log(todo);
  if (!todo){
    res.render('todos/show', {
      error: "No to-do found with this ID"
    })
  } else {
    res.render('todos/show', {todo})
  }
});

//EDIT
//takes you to page and allows you to manipulate but doesnt make lasting change
//render edit form so you change an existing record
router.get('/:id/edit', (req, res) => {
  res.render('todos/edit', {
    todo: {
      id: req.params.id,
      description: data.seededTodos[req.params.id].description,
      urgent: data.seededTodos[req.params.id].urgent,
    }
  });
});

//UPDATE
//this actually saves an edit 
//the edit above only takes you to HBS page that allows you to see form that makes a change
router.put('/:id', function(req, res) {
  var todoToEdit = data.seededTodos[req.params.id];

  todoToEdit.description = req.body.description;
  todoToEdit.urgent = req.body.urgent;

  res.redirect('/todos');
})

//DELETE
router.post('/', (req, res) => {
  console.log(req.body);
  const newTodo = req.body;
  data.seededTodos.push(newTodo);
  res.redirect('/todos');
});

router.delete('/:id', function(req, res) {
  data.seededTodos.splice(req.params.id, 1); // remove the item from the array

  res.redirect('/todos');  // redirect back to the index route
});

module.exports = router;