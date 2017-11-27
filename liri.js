var http = require("http");
var twitter = require("./twitter.js");
var spotify = require("./spotify.js");
var fileStoreMethods = require("./fs.js");
var fs = require("fs");
var inquirer = require("inquirer");
var omdb = require("./omdb.js");
var moment = require("moment");
var now = moment().format("MMM DD YYYY HH:mm");
var user_demand;
var arg;
var prompt = inquirer.createPromptModule();

var questions = [{
    name: 'userCommand',
    message: 'What can I help you with?',
    type: "list",
    choices: ['Show Me Tweets', 'Spotify This', "Movie search", 'Do What it says'],
    filter: function(str) {
        return str.split(' ').join('-').toLowerCase();
    }
}];

prompt(questions).then(function(response) {
    console.log("You chose: " + response.userCommand);
    user_demand = response.userCommand;
    switch (response.userCommand) {
        case "show-me-tweets":
            get_output("show-me-tweets");
            break;
        case "spotify-this":
            inquirer.prompt([{
                name: "userChoice",
                message: "What song do you want to see?",
                type: "input",
            }]).then(function(response) {
                spotify.params.query = response.userChoice;
                spotify.get_songs(spotify.params);
            });
            break;
        case "movie-search":
            inquirer.prompt([{
                name: "userChoice",
                message: "What movie would you like to see?",
                type: "input",
            }]).then(function(response) {
                omdb.get_movie(response.userChoice);
            });
            break;
        case "do-what-it-says":
            fileStoreMethods.get_output("random.txt");
            break;
        default:
            console.log("Try again please")





    }
});












function get_output(user_demand) {
    switch (user_demand) {
        case "show-me-tweets":
            twitter.get_tweets();
            break;
        case "spotify-this-song":
            if (process.argv[3]) {
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