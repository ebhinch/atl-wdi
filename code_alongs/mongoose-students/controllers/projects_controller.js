const express = require("express");

// have to add "mergeParams: true" when you are using a second controller
const router = express.Router({mergeParams: true});
const Schema = require("../db/schema.js");

const StudentModel = Schema.StudentModel;


router.get("/", (request, response) => {
    // response.send(`Student ID is: ${request.params.studentId}`);

    const studentId = request.params.studentId;

    //find one student by ID
    StudentModel.findById(studentId)
        .then((student) => {
            //display each of the student's projects in a div and student's name - this is stored in student object
            response.render("projects/index", {
                student: student
            })


        })
        .catch((error) => {
            console.log(error)
        })

})


module.exports = router;