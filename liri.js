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

ask_questions();


function ask_questions() {
    prompt(questions).then(function(response) {
        console.log("You chose: " + response.userCommand);
        user_demand = response.userCommand;
        getStuff(user_demand);
    })
};

function getStuff(request) {
    fs.appendFile('logs.txt', "The user chose: " + request + " at: " + now + "\n", function(err) {
        if (err) throw err;
    });

    switch (request) {
        case "show-me-tweets":
            twitter.get_tweets();
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
            var the_eval = fileStoreMethods.get_data("random.txt");
            switch (the_eval[0]) {
                case "spotify-this-song":
                    spotify.params.query = the_eval[1];
                    spotify.get_songs(spotify.params);
                    break;
                case "show-me-tweets":
                    twitter.get_tweets();
                    break;
                case "movie-search":
                    omdb.get_movie(the_eval[1]);
                default:
                    console.log("Non Executable Command");
                    break;
            }
            break;
        default:
            console.log("Try again please");

    }
};