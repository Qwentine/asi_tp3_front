// if (typeof localStorage === "undefined" || localStorage === null) {
//     const LocalStorage = require('node-localstorage').LocalStorage;
//     localStorage = new LocalStorage('./scratch');
// }

class Article {
    constructor() {
        this.articles = "tete";
    }

    setter(list) {
        this.articles = list;
    }

    /*getter() {
        return this.articles;
    }*/
}

module.exports = Article;