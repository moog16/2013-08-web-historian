var path = require('path');
// var url = require('url');
module.exports.datadir = path.join(__dirname, "../data/sites.txt"); // tests will need to override this.

module.exports.handleRequest = function (req, res) {
  var headers = {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "content-type, accept",
    "access-control-max-age": 10,
    'Content-Type': "text/plain"
  };

  if(req.method === 'GET') {
    res.writeHead(200, headers);
    var data = req.url.split('.')[1];
    if(data === undefined) {
      data = '<input';
    }
    res.end(data);
  } else if(req.method === 'POST') {
    res.writeHead(302, headers);

  }
  //console.log(exports.datadir);
};
