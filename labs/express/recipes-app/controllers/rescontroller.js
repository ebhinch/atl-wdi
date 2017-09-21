const express = require("express");
const router = express.Router();
const recipes = require("../recipes.js");


//INDEX of RECIPES
router.get('/', (req, res) =>{
    res.render('recipes/index', {
    recipes: recipes.seededRecipes
    });
});

router.get("/new", (req, res) => {
    res.render("recipes/new");
});

router.get('/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const recipes = recipes.seededRecipes[id];
});

