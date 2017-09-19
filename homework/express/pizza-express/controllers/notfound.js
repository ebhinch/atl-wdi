const express = require("express");
const router = express.Router();


router.get("*", (req, res, next) => {
    let notfound = `404 Page Not Found`

    res.render("notfound", {
        data: notfound
    })
})




module.exports = router;

