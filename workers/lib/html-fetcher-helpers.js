var fs = require('fs');

exports.readUrls = function(filePath, cb){
  var sites = fs.readFileSync(filePath, 'utf8').split("\n");
  cb(sites);
};

exports.downloadUrls = function(urls){
  // fixme
  if (typeof urls === 'array') {
    for (var i = 0; i < urls.length; i++) {
      
    }
  }
};
