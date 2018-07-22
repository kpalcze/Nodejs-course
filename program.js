var fs = require('fs');

fs.readFile(process.argv[2], function onFinishedReading(err, fileContents) {
  if (err) {
    return console.log(err);
  }
  var numOfLines = fileContents.toString().split('\n').length - 1;
  console.log(numOfLines);
});