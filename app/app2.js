var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.send('<h1>Hello, I'am a webserver</h1>');
});
var server = app.listen(3000, function() {
    console.log('Listening on port 3000');
});


//Compare with Handling HTTP requests with Node.js
// var http = require('http');
//
// var myServer = http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type" : "text/html"});
//   response.write('<h1>Hello, I'am a webserver</h1>');
//   response.end();
// });
//
// myServer.listen(3000);
// console.log('Go to http://localhost:3000 on your browser');