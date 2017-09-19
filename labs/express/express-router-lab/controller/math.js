const express = require("express");
const router = express.Router();

router.get('/:operator', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    if (req.params.operator === "add") {
        res.render(`${num1 + num2}`);
    } else if (req.params.operator === "subtract") {
        res.render(`${num1 - num2}`);
    } else if (req.params.operator === "divide") {
        res.render(`${num1 / num2}`);
    } else if (req.params.operator === "multiply") {
        res.render(`${num1 * num2}`);
    } else {
        res.render("invalid")
    }
});

module.exports = router;

