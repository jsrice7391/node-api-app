var http = require("http");
var twitter = require("./keys.js");


http.get('search/tweets', { q: 'node.js' }, function(error, tweets, response) {
    console.log(tweets);
});




console.log("The value of port is: " + process.env.SHELL);