// var omdb = require("omdb");
// // require("dotenv/config");
var request = require("request");
// var userInput;
// var dbApiCall = "http://www.omdbapi.com/?i=tt3896198&apikey=40e9cece&t=" + userInput;


module.exports = {

    get_movie: function(user_movie) {
        var dbApiCall = "http://www.omdbapi.com/?i=tt3896198&apikey=40e9cece&t=" + user_movie;
        request(dbApiCall, function(error, response, body) {
            if (error) {
                return console.log(error);
            } else {
                console.log("------------------------")
                var theMovie = JSON.parse(body);
                var theActors = theMovie.Actors;
                console.log(theMovie.Title);
                console.log(theMovie.Released);
                console.log(theMovie.Ratings[0].Value);
                console.log(theMovie.Ratings[1].Value)
                console.log(theMovie.Country);
                console.log(theMovie.Language)
                console.log("Plot: " + theMovie.Plot);
                console.log("Actors: " + theActors);
                console.log("------------------------")


            }

        });
    }


}