var path = require('path');
var url = require('url');
var fs = require('fs');
var _ = require('./underscore.js');
module.exports.datadir = path.join(__dirname, "../data/sites.txt"); // tests will need to override this.

module.exports.handleRequest = function (req, res) {
  console.log("Serving request type " + req.method + " for url " + req.url);
  var parsedURL = url.parse(req.url).pathname.split("/");
  console.log("Parsed URL: ", parsedURL);
  var mainRootArray = __dirname.split("/");
  var mainRoot = mainRootArray.slice(0,mainRootArray.length-1).join("/");
  if (req.method === 'GET') {
  if(req.url === '/') {
    req.url = '/index.html';
  }
  fs.readFile(__dirname+'/public'+req.url, 
    function(err,data) {
      if (err) {
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
  } else if (req.method === 'POST') {
    var urlData = '';
    req.on('data', function(chunk) {
      urlData += chunk;
    });
    var thisUrl;
    req.on('end', function() {
      thisUrl = urlData.split('=').pop();

      var websiteData = fs.readFileSync(mainRoot+'/data/sites.txt', 'utf8');
      if(websiteData.length !== 0) {
        websiteData += '\n';
      }
      var sites = websiteData + thisUrl + '\n';
      sites = _.uniq(sites.split('\n')).join('\n');      
      
      fs.writeFileSync(mainRoot+'/data/sites.txt', sites);
      res.writeHead(302);
      res.end(thisUrl);
    });
  }
>>>>>>> 6ac6e1b6e207538555875008af7c110c11a8d434
};

