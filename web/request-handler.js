var path = require('path');
var url = require('url');
var fs = require('fs');
module.exports.datadir = path.join(__dirname, "../data/sites.txt"); // tests will need to override this.

module.exports.handleRequest = function (req, res) {
  //console.log(exports.datadir);
  console.log("Serving request type " + req.method + " for url " + req.url);
  var parsedURL = url.parse(req.url).pathname.split("/");
  console.log("Parsed URL: ", parsedURL);
  if(req.url === '/') {
    req.url = '/index.html';
  }
  fs.readFile(__dirname+'/public'+req.url, 
    function(err,data) {
      if (err) {
        var mainRootArray = __dirname.split("/");
        var mainRoot = mainRootArray.slice(0,mainRootArray.length-1).join("/");
        console.log('Trying to find a file at '+mainRoot+'/data/sites/'+req.url);
        fs.readFile(mainRoot+'/data/sites/'+req.url, 
          function(err,data) {
            if (err) {
              res.writeHead(404);
              res.end('File not found');
              return;
            }
            res.writeHead(200);
            res.end(data);
          });
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
};

