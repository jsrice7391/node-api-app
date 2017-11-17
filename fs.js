var fs = require("fs");

var parsedData = function() {
    fs.readFile('random.txt', function(err, data) {
        if (err) {
            return console.error(err);
        }
        var dataToParse = data.toString();
        parsedData = dataToParse.split(",");
    });
    return parsedData

}

// console.log(parsedData());



exports.parseddata = parsedData;