var http = require('http');
var server = http.createServer();

function handleRequest(req,res){
	res.writeHead(200,{'content-type':'text/plain'});
	res.write('Hello');
	res.write('FoodPolice');
	res.end();
}

server.on('request', handleRequest);
server.listen(8888);
console.log('server running');