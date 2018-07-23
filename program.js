const http = require('http');

var responses = [];
var fetchedRespones = 0;

for (var i = 2; i < 5; i++) {
    getData(process.argv[i], i);
}

function getData(url, index) {
    var fullResponse = "";
    http.get(url, function callback(response) {
        response.setEncoding('utf-8');
        response.on('error', function (error) {
           console.error(error); 
        });
        response.on('data', function (data) {
            fullResponse += data;
        });
        response.on('end', function () {
            responses[index - 2] = fullResponse;
            fetchedRespones++;
            if (fetchedRespones === 3)
                displayResponses();
        });
    });
}

function displayResponses() {
    for (var i = 0; i < 3; i++) {
        console.log(responses[i]);
    }
}
