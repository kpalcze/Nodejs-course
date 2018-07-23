const http = require('http');


var fullResponse = "";

http.get(process.argv[2], function callback(response) {
    response.setEncoding('utf-8');
    response.on('error', function (error) {
        console.error(error); 
    });
    response.on('data', function (data) {
        fullResponse += data;
    });
    response.on('end', function () {
        console.log(fullResponse.length);
        console.log(fullResponse);
    })
});
