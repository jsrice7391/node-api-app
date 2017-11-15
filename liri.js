var http = require("http");
var twitter = require("./twitter.js");


var user_demand = process.argv[2].toLowerCase();

switch (user_demand) {
    case "my-tweets":
        console.log(twitter.get_tweets());
        break;
    default:
        console.log("Not quite right");
        break;
}