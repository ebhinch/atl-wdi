const express = require("express");
const router = express.Router();
const data = require("../data.js");

/* INDEX TODOS */
router.get('/', function (req, res) {
    res.render('todos/index', {
        todos: data.seededTodos
    });
});

// NEW TODOS
//this code needs to be above SHOW TODOS b/c SHOW TODOS has a "wildcard" parameter (introduced with ":" that won't read anything below)
router.get("/new", (req, res) => {
    res.render("todos/new");
})

module.exports = router;

//   SHOW TODOS
// make this a dynamic route
router.get("/:id", (req, res) => {

    //create new variable and set to what we're looking for
    const id = parseInt(req.params.id);
    
    //asign "todo" this points to array in the data.js file
    const todo = data.seededTodos[id];

    //use handlebars - handlebars assumes we're in the "views" folder, so we don't need to use ".." to back out of folder

    if (!todo) {
        res.render("todos/show", {
            error: "No Todo found with this ID."
        })
    }


    else {
        res.render("todos/show", {
            todo: todo
        })
    }
});

//es6 lets you do below 
// } else {
//     res.render("todos/show", {todo}
//     })
// }

router.post("/", (req, res) => {
    console.log(req.body);
    const newTodo = req.body;
    data.seededTodos.push(newTodo);
    res.send("succesffully created a todo");
});

router.delete('/:id', function (req, res) {
    data.seededTodos.splice(req.params.id, 1); // remove the item from the array

    res.redirect('/todos');  // redirect back to the index route
});

module.exports = router;


