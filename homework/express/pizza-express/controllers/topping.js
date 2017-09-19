const express = require("express");
const router = express.Router();

router.get("/:type", (req, res, next) => {
    // const type = req.params.type;
    let topping = `${req.params.type} pizza! Good choice.`
    
    res.render("toppings", {
        data: topping
    })

})

module.exports = router;