const http = require('http');

function handler(req, res){
  res.writeHead(200,{'Content-type':'text/html'});
  res.write('<h1>Hello, I am a webserver!</h1>');
  res.end();
}

const server = http.createServer(handler);
server.listen(3000);