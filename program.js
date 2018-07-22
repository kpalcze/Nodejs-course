const fs = require('fs');
const path = require('path');
const dirName = process.argv[2];
const extention = "." + process.argv[3];

fs.readdir(dirName, function onFinishedReading(err, listOfFiles) {
    if (err)
       return console.log(err);
    displayFileNames(listOfFiles);
});

function displayFileNames(files) {
    for (var i = 0; i < files.length; i++) {
        if (path.extname(files[i]) === extention) {
            console.log(files[i]);
        }
    }
}