const express = require('express');
const router = express.Router();
const Schema = require("../db/schema.js");

const StudentModel = Schema.StudentModel;

//index
router.get('/', (request, response) => {
    StudentModel.find({})
        .then((students) => {
            response.render("students/index", {
                students: students
            })
        })

        .catch((error) => {
            console.log(error)
        })
}) 


//SHOW ROUTE
router.get('/:id', (request, response) => {
    const studentId = request.params.id

    //THIS WILL RETURN
    StudentModel.findById(studentId)
        //WILL NEED TO USE A PROMISE
        .then((student) => {
            response.render("students/show", {
                student: student
            })
        })

        .catch((error) => {
            console.log(error)
        })

})


//DELETE ROUTE
//THIS IS A HACKY WAY TO DO DELETE WITHOUT USING "METHOD OVERRIDE"
router.get("/:id/delete", (request, response) => {
    const studentId = request.params.id

    StudentModel.findOneAndRemove(studentId)
    //will return a promise
    .then((student) => {
        response.send("You deleted it!")
    })

    .catch((error) => {
        console.log(error)
    })
  
})


module.exports = router;