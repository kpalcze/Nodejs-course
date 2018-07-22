const fs = require('fs');
const path = require('path');

var filteredFiles =[];

module.exports = function (dirName, ext, callback) {
    fs.readdir(dirName, function (err, files) {
        if (err) {
            return callback(err, null);
        }
        for (var i = 0; i < files.length; i++) {
            if (path.extname(files[i]) === ("." + ext)) {
                filteredFiles.push(files[i]);
            }
        }
    callback(null, filteredFiles);
    });
};