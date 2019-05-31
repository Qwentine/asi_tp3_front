const express = require("express"),
    router  = express.Router(),
    path    = require("path");

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "../view/main.html"));
});

module.exports = router;