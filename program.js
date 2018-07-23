const http = require('http');
const fs = require('fs');

var server = http.createServer(function callback(request, response) {
    response.writeHead(200, { 'content-type': 'text/plain' });
    var fileStream = fs.createReadStream(process.argv[3]);
    fileStream.pipe(response);
});
server.listen(Number(process.argv[2]));
