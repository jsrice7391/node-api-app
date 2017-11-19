var http = require("http");
var twitter = require("./twitter.js");
var spotify = require("./spotify.js");
var fileStoreMethods = require("./fs.js");
var fs = require("fs");
var omdb = require("./omdb.js");
var moment = require("moment");
var now = moment().format("MMM DD YYYY HH:mm");

// console.log(fileStoreMethods);



if (process.argv.length > 2) {
    var user_demand = process.argv[2].toLowerCase();
    fs.appendFileSync('logs.txt', "The user entered this command: " + process.argv[2] + " " + " at " + now + "\n");
    switch (user_demand) {
        case "my-tweets":
            twitter.get_tweets();
            break;
        case "spotify-this-song":
            spotify.get_songs(process.argv[3].toLowerCase());
            break;
        case "do-what-it-says":
            var the_out = fileStoreMethods.get_data("random.txt");
            console.log(the_out)
            break;
        case "movie-this":
            omdb.get_movie(process.argv[3]);
            break;
        default:
            console.log("Not quite right");
            break;
    }
} else {
    console.log("I need more variables, please");
}