var fs = require("fs");

function travel(dir, callback) {
    fs.readdirSync(dir).forEach(function(file) {
        var pathname = dir + "/" + file;
        if (fs.statSync(pathname).isDirectory()) {
        	travel(pathname,callback);
        } else {
            callback(pathname);
        }
    });
}


var dir = "f:/www"

travel(dir, function(pathname) {
    console.log(pathname);
})
