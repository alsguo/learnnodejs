var filepath = "f:/www/node/test.txt";
var fs = require("fs");

//var data = fs.readFileSync(filepath);
//console.log(data.toString());

fs.readFile(filepath, function(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
})

console.log("End Of Run!");
