//requirements
const express = require("express");
const router = express.Router();
const pirates = require('../models/pirates.js');

//all routes for /pirate
//INDEX
router.get("/", (req, res) => {
    const id = parseInt(req.params.id);
       res.render("pirates/index", {
           pirates: pirates
       });
  

});

//NEW
router.get("/new", (req, res) => {
    res.render("pirates/new");
})

//SHOW
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const pirate = pirates[id];
    res.render("pirates/show", {
        pirate: pirate
    });

})

// MAKE a CREATE ROUTE
router.post("/", (req, res) => {
    const newPirate = req.body;
    pirates.push(newPirate);
    res.redirect("/pirates");    
    res.send("successfully created a pirate");
});

//EDIT
router.get("/:id/edit", (req, res) => {
    res.render("pirates/edit", {
        pirates: {
            id: req.params.id,
            name: pirates[req.params.id].name,
            birthplace: pirates[req.params.id].birthplace,
            death_year: pirates[req.params.id].death_year,
            base: pirates[req.params.id].base,
            nickname: pirates[req.params.id].nickname,
        }
    });
    
})

//UPDATE
router.put("/:id", (req, res) => {
    const pirateToEdit = pirates[req.params.id];
    
    pirateToEdit.name = req.body.name;
    pirateToEdit.birthplace = req.body.birthplace;
    pirateToEdit.death_year = req.body.death_year;
    pirateToEdit.base = req.body.base;
    pirateToEdit.nickname = req.body.nickname;

    res.redirect("/pirates");
});


//DELETE
router.delete("/:id", (req, res) => {
    pirates.splice(req.params.id, 1);
    res.redirect("/pirates");
});




//exports
module.exports = router;


