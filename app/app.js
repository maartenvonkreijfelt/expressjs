const http = require('http');
const url = require('url');

function handler(req, res){

  const parsedUrl = url.parse(req.url, true);
  //console.log(parsedUrl);


  if(parsedUrl.pathname ==='/'){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h1>Hello, I am a webserver!</h1>');
    res.end();
  } else{
    res.writeHead(404,{'Content-type':'text/html'});
    res.end();

  }


}

const server = http.createServer(handler);
server.listen(3000);