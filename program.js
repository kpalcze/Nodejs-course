var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
buf = buf.toString();
var numOfLines = buf.split('\n').length - 1;

console.log(numOfLines);