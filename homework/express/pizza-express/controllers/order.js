const express = require("express");
const router = express.Router();

router.get("/:amount/:size", (req, res, next) => {
   let order = `Your order for ${req.params.amount} ${req.params.size} pizzas will be ready in 1 minute!`

   res.render("order", {
       data: order
   })

})

module.exports = router;


