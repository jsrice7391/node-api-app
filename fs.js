var fs = require("fs");
var content;




var the_function = function(the_file) {
    content = fs.readFileSync(the_file, "utf8").split(",");
    return content;
}


// var theFinalContent = the_function("random.txt");




module.exports = {
    get_data: the_function
}