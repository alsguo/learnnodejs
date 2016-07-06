
var fs = require("fs");

function copy (src,dst) {
	fs.writeFileSync(dst,fs.readFileSync(src));
}

function bigFileCopy (src,dst) {
	fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}
function main(argv){
	bigFileCopy(argv[0],argv[1]);
}

var srcfile = "f:/www/data/input.txt";
var desfile = "f:/www/data/input.bak.txt";

main([srcfile,desfile])

console.log("copy file success!")