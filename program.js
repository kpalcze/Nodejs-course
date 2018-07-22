var fs = require('fs');

var buf = fs.readFileSync(process.argv[1]);
buf = buf.toString();
var numOfLines = buf.split('\n').length - 1;

console.log(lines);