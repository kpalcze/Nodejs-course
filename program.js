const filemodule = require('./firstmodule');

filemodule(process.argv[2], process.argv[3], function(err, files) {
    if (err)
        return console.log(err);
    for(var i = 0; i < files.length; i++) {
        console.log(files[i]);
    }
});
