var omdb = require("omdb");
// require("dotenv/config");


var userInput = "Bambi";


var params = "http://www.omdbapi.com/?i=tt3896198&apikey=48f6a5c17&t=" + userInput;


console.log(params)


// // const omdb = new Omdb({
// //     apiKey: "40e9cece",
// //     baseUrl: "https://omdbapi.com/"
// // });
// omdb.get(params, function(err, movies) {
//     if (err) {
//         return console.error(err);
//     } else {
//         console.log(movies);
//     }


// });