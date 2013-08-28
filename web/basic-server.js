var express = require("express");
var app = express();
var myStuff = require("./request-handler");

var port = 8080;
//var server = http.createServer(myStuff.handleRequest);

// app.get('/hello.txt', function(req, res){
//   var body = 'Hello World';
//   res.setHeader('Content-Type', 'text/plain');
//   res.setHeader('Content-Length', body.length);
//   res.end(body);
// });
app.use(myStuff.handleRequest);
console.log("Listening on port " + port);
app.listen(port);

