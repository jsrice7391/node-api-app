var http = require("http");
var twitter = require("./twitter.js");
var spotify = require("./spotify.js");
var fs = require("./fs.js")



if (process.argv.length > 2) {
    var user_demand = process.argv[2].toLowerCase();
    switch (user_demand) {
        case "my-tweets":
            twitter.get_tweets();
            break;
        case "spotify-this-song":
            spotify.get_songs(process.argv[3].toLowerCase());
            break;
        case "do-what-it-says":
            fs.readTheFile();
            console.log(fs.parsedData);
            break;
        default:
            console.log("Not quite right");
            break;
    }
} else {
    console.log("I need more variables, please");
}