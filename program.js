const http = require('http');
const url = require('url');

const port = Number(process.argv[2]);

function getParsedDate (date) {
    var d = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    }
    return JSON.stringify(d);
}

function getDateInMiliseconds (date) {
    return JSON.stringify({
        unixtime: date.getTime()
    });
}

var server = http.createServer(function (req, res) {
    var urlpath = url.parse(req.url, true);
    var time = urlpath.query.iso;
    var date = new Date(time);
    var response;
    
    if ("\/api\/parsetime" === urlpath.pathname) {
        response = getParsedDate(date);
        
    } else if ("\/api\/unixtime" === urlpath.pathname) {
        response = getDateInMiliseconds(date);
    }
    
    res.writeHead(200, {'Content-Type': 'application/json' });
    res.end(response);
});  

server.listen(port);

