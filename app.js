var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {'content-type': 'text/plain'})
	// res.end('<p>hello world</p>');
	setTimeout(function(){
		console.log("world");
	},3000)
	console.log("hello");
	res.end();
});

server.listen(3000);
console.log("our server is listening on port 3000");