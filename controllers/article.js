const express = require("express"),
    router  = express.Router(),
    path    = require("path");

const models = require("../models"),
      article = new models.Article();

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../view/article-list.html"));
});

router.get("/edition", function (req, res) {
    res.sendFile(path.join(__dirname, "../view/article-edition.html"));
});

router.get("/list", function (req, res) {
    const articles = [
        {
            author: "Carl Hulse",
            section: "Politics",
            status: "Published",
            date: "2016-12-31",
            title: "House Republicans Fret About Winning Their Health..."
        }, {
            author: "Margalit Fox",
            section: "Cinema",
            status: "Published",
            date: "2017-01-06",
            title: `When Walt Disney&#39;s Bambi opened in 1942 critics par...`
        }
    ];
    const stringArticles = JSON.stringify(articles);

    const render = `<p> pending...</p>
                    <p id="toto"></p>
                    <script>
                        localStorage.setItem("articles", '${stringArticles}');
                        window.location.replace("/articles");
                    </script>
                    `;
    res.send(render);
});

module.exports = router;