var http = require("http");
http.createServer(function(request, response) {
response.writeHead(200, {"Content-Type": "text/html"});
response.write("Hola Desarrollo Web, como estan");
response.end();
}).listen(8888);