const net = require('net');
const moment = require('moment');

var server = net.createServer(function listener(socket) {
    socket.end(getCurrentDate());
});
server.listen(Number(process.argv[2]));

function getCurrentDate() {
    return moment().format('YYYY-MM-DD kk:mm') + '\n';
}