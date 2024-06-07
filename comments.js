//Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var port = 3000;

var server = http.createServer(function(req, res) {
  var uri = url.parse(req.url).pathname;
  var filename = path.join(process.cwd(), uri);

  fs.exists(filename, function(exists) {
    if(!exists) {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write('404 Not Found\n');
      res.end();
      return;
    }

    if (fs.statSync(filename).isDirectory()) filename += '/index.html';

    fs.readFile(filename, 'binary', function(err, file) {
      if(err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.write(err + '\n');
        res.end();
        return;
      }

      res.writeHead(200);
      res.write(file, 'binary');
      res.end();
    });
  });
});

server.listen(port);
console.log('Server running at http://localhost:' + port + '/');

// Websocket server
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ server: server });

var comments = [];

wss.on('connection', function(ws) {
  ws.on('message', function(message) {
    if (message.indexOf('comment:') === 0) {
      var comment = message.replace('comment:', '');
      comments.push(comment);
      wss.clients.forEach(function(client) {
        client.send('comment:' + comment);
      });
    }
  });

  comments.forEach(function(comment) {
    ws.send('comment:' + comment);
  });
});