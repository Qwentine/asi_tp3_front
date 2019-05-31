const express    = require("express"),
      app        = express();

const controllers = require("./controllers"),
      main = controllers.Main,
      article = controllers.Article;

app.use('/', main);
app.use('/articles', article);
app.use(express.static(__dirname + '/view'));
app.listen(3000);
