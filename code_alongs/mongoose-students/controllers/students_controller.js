
const express = require('express');
const router = express.Router();
const Schema = require("../db/schema.js");

const StudentModel = Schema.StudentModel;

//INDEX ROUTE
//this will display all the students 
router.get('/', (request, response) => {

    //find all of the students from the database
    StudentModel.find({})

        //THEN once you're done finding students in database, use handlebars to create a div for each student
        .then((students) => {
            response.render("students/index", {
                students: students
            })
        })

        .catch((error) => {
            console.log(error)
        })
}) 


//NEW ROUTE
router.get("/new", (request, response) => {

    //don't put a "/" in front of students on next line or you will confuse and look in wrong folder
    //display an empty form containing for each student attribute from our Schema
    response.render("students/new");
})

//SHOW route
//shows whatever student whose id you reference 
//WE NEED TO PUT THIS ROUTE AT THE BOTTOM B/C WE ARE USING A WILDCARD ":ID"
router.get('/:id', (request, response) => {
    const studentId = request.params.id;

    //this will return
    StudentModel.findById(studentId)
        
        .then((student) => {
            response.render("students/show", {
                student: student
            })
        })

        .catch((error) => {
            console.log(error)
        })

})

//EDIT route
//update route part 1
//this will show us form and information we will be updating 
router.get("/:id/edit", (request, response) => {

    //the next line will go get information we need - get student id from the params
    const studentId = request.params.id;

    //find the student from the database using the id we just got
    StudentModel.findById(studentId)

        //THEN once database has returned single student's information, use handlebars to create a div for the single student
        //THEN render the form populated with current student info
        .then((student) => {

            //the next line refers to the "edit" handlebars saved in views-students
            //use handlebars to show a form pre-populated with the info from the single student we are trying to edit
            //BE SURE to use method override to let the form submit a PUT request instead default POST to the "/students/THE_STUDENT_ID" where THE_STUDENT_ID is the single student we are trying to update
            response.render("students/edit", {
                student: student
        })
    })
        .catch((error) => {
            console.log(error)
        })
})



//DELETE route

//to use a "Delete link"
router.get("/:id/delete", (request, response) => {

    //grab the student ID from the parameters for the SINGLE student ID
    const studentId = request.params.id;

    //use the StudentModel to find the student document that corresponds with the ID we want to delete and delete it
    StudentModel.findByIdAndRemove(studentId)
    //will return a promise
    .then((student) => {

        //THEN redirect back to the Students INDEX to show all the remaining students
        response.redirect("/students")
    })

    .catch((error) => {
        console.log(error)
    })
  
})

//for example - this is how to use a "Delete Button"

router.delete("/:id", (request, response) => {
    //grab the student ID from the parameters for the SINGLE student ID
    
    const studentId = request.params.id;
    
    //use the StudentModel to find the student document that corresponds with the ID we want to delete and delete it
    StudentModel.findByIdAndRemove(studentId)
    //will return a promise
    .then((student) => {
        
        //THEN redirect back to the Students INDEX to show all the remaining students
        response.redirect("/students")
    })

    .catch((error) => {
        console.log(error)
    })
  
})


//CREATE route
//part 2 - this is what makes the information save
router.post("/", (request, response) => {

    //request.body refers to what was in form but turned into a JS object bc we used body parser
    //grab the information the user entered in the form, by capturing the request body
    //we need to have setup "body parser" to give us this request's body in a nice JS format
    const newStudent = request.body;

    //saves what came through form and creates new student with data from that js object
    //you use whole "student" object we created and pass as parameter for .create
    //you can use (newStudent) in next line instead of ({name: newStudent.name, age: newStudent.age}). body parser created the newStudent object for us. truthfully you could use (request.body) instead of (newStudent) but don't.

    //create a new student in the database, using the StudentModel
    StudentModel.create(newStudent)

        //THEN once the student has been saved in the database, redirect to the Students Index, so that we can view all the students, including the new one that we just created
        //this promise says, create new student, and once you have and you've been successful, redirect to /students
        .then(() => {
            response.redirect("/students")
        })

        //if you aren't successful in creating new student, show error
        .catch((error) => {
            console.log(error)
        })

})

//UPDATE route
//update part 2 - PUT

router.put("/:id", (request, response) => {

    //get the student ID to identify which single student to update
    const studentIdToUpdate = request.params.id;
    
    //get all information from the form (as an object), including any updated student information 
    const updatedStudent = request.body;

    //{new:true} makes a new copy of the object rather than deleting previous. is safer than deleting
    //PARAMETERS: 
    //first parameter = id: studentIdToUpdate tells us which student to update
    //second parameter = updatedStudent shows updated information we're saving
    //third parameter = {new:true} boilerplate, telling to make copy

    //use the StudentModel to find the student in the database and update any changed information
    StudentModel.findByIdAndUpdate(studentIdToUpdate, updatedStudent, { new: true })
        .then(() => {

            //THEN once the single student has been successfully updated in the database, redirect to the single student's SHOW page
            response.redirect(`/students/${studentIdToUpdate}`)
        })
       .catch((error) => {
            console.log(error)
        })
})


module.exports = router; 