const http = require('http');

http.get(process.argv[2], function callback (response) {
    response.setEncoding('utf8')
    response.on("error", function (error) {
        console.error(error);
    });
    response.on("data", function (data) {
        console.log(data);
    }); 
});