const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{

    const greeting = "Oh hey there, "

    res.render("greeting", {
        data: greeting + req.query.name
    })

})

module.exports = router;
