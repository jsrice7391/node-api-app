var fs = require("fs");
var parsedData;
var dataToParse;

module.exports = {
    parsedData,
    dataToParse
}



module.exports = {
    readTheFile: function() {
        fs.readFile('random.txt', function(err, data) {
            if (err) {
                return console.error(err);
            }
            var dataToParse = data.toString();
            var parsedData = dataToParse.split(",");
            console.log(parsedData);
            module.exports.parsedData = parsedData;
            // console.log("Asynchronous read: " + parsedData[0]);
        });

    }
};