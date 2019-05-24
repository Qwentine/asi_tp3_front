const express = require("express"),
      app     = express();

// <div style='color:red;'>Home</div>

app.get('/', function(req, res) {
    res.send("test");
});

app.listen(3000, function() {
    console.log("Front start");
});
