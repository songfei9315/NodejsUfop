var http = require('http');
var url = require('url');

console.log('hello ufop');

http.createServer(function(req, res) {　　
	console.log('req', req);
    var path = url.parse(req.url).pathname;
    var dt = new Date();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("Hello,World ! \n" + dt.getTime());
    res.end();
}).listen(9100, "0.0.0.0");

console.log('access:http://0.0.0.0:9100');
