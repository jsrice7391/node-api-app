var http = require("http");
var twitter = require("./twitter.js");
var spotify = require("./spotify.js");
var fileStoreMethods = require("./fs.js");
var fs = require("fs");
var omdb = require("./omdb.js");
var moment = require("moment");
var now = moment().format("MMM DD YYYY HH:mm");
var user_demand;
var arg;

if (process.argv.length > 2) {
    get_output(process.argv[2].toLowerCase());
    fs.appendFileSync('logs.txt', "The user entered this command: " + process.argv[2] + " " + " at " + now + "\n");
} else {
    console.log("I need more variables, please");
}



function get_output(user_demand) {
    switch (user_demand) {
        case "my-tweets":
            twitter.get_tweets();
            break;
        case "spotify-this-song":
            if (process.argv[3]) {
                spotify.params.query = process.argv[3].toLowerCase();
                spotify.get_songs(spotify.params);
            } else {
                spotify.get_songs(spotify.default);
            }
            break;
        case "do-what-it-says":
            if (process.argv[3]) {
                var the_out = fileStoreMethods.get_data(process.argv[3]);
                process.argv[3] = the_out[1];
                get_output(the_out[0]);
            } else {
                var the_out = fileStoreMethods.get_data("random.txt");
                process.argv[3] = the_out[1];
                get_output(the_out[0]);
            }
            break;
        case "movie-this":
            if (process.argv[3]) {
                omdb.get_movie(process.argv[3]);
            } else {
                omdb.get_movie("Mr.Nobody");
            }
            break;
        default:
            console.log("Not quite right");
            break;
    }
}