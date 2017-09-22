const express = require("express");
const router = express.Router();
const data = require("../models/data.js");

//Show TODONTs Index
router.get("/", (req, res) => {
    res.render("toDonts/index", {
        //when router goes to /toDonts respond and render todonts.hbs file with the seeded seededToDonts data
        //this toDonts is not the same "toDonts" folder w/i views
        //as long as the key (here, "toDonts") matches what is in hbs file, it doesnt matter what you call it
        data: data.seededToDonts
    });
});

//Show TODONTs New
router.get("/new", (req, res) => {
    //next line tells us to use the new.hbs file here
    res.render("toDonts/new");

})


//Show TODONTs Show
//below "/id" is a wildcard 
router.get("/:id", (req, res) => {
    //the wildcard "id" in line above is same as the id in (req.params.id)
    const id = parseInt(req.params.id);
    //the id in [id] references the index of the seededToDonts array. it tells you where in the seededToDonts array to go
    const todont = data.seededToDonts[id];


//Show TODONTs Error
    //if todont is not available, show error. if your [id] is greater than indicies in array, you'll get this error
    if(!todont) {
        res.render("todonts/show", {
            error: "No to-dont's match this ID."
        });
     } else {
        res.render("toDonts/show", {
            todont: todont
        })
    }
//close the TODONTs Show after Error so they run together 
});


//Show TODONTs Post
router.post("/", (req, res) => {
    console.log(req.body);
    const newToDont = req.body;
    data.seededToDonts.push(newToDont);
    res.redirect("/todonts");
});

//Show TODONTs Edit
router.get("/:id/edit", (req, res) => {
    res.render("toDonts/edit", {
        todont: {
            id: req.params.id,
            description: data.seededToDonts[req.params.id].description,
            urgent: data.seededToDonts[req.params.id].urgent,
        }
    });
});

//Show TODONTs Update
router.put("/:id", (req, res) => {
    const todontToEdit = data.seededToDonts[req.params.id];
    todontToEdit.description = req.body.description;
    todontToEdit.urgent = req.body.urgent;

    res.redirect("/todonts");
    
});

//Show TODONTs Delete
router.delete("/:id", (req, res) => {
    data.seededToDonts.splice(req.params.id, 1); 

    // const newTodont = req.body;
    // data.seededToDonts.push(newTodont);
    res.redirect("/todonts");
});

module.exports = router;