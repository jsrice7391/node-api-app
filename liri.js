var http = require("http");
var twitter = require("./twitter.js");
var spotify = require("./spotify.js");

var user_demand = process.argv[2].toLowerCase();

switch (user_demand) {
    case "my-tweets":
        twitter.get_tweets();
        break;
    case "spotify-this-song":
        spotify.get_songs(process.argv[3].toLowerCase())
        break;
    default:
        console.log("Not quite right");
        break;
}