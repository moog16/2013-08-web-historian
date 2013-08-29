var fs = require('fs');
var http = require('http-get');
var mainRootArray = __dirname.split("/");
var mainRoot = mainRootArray.slice(0,mainRootArray.length-2).join("/");

exports.readUrls = function(filePath, cb){
  var sites = fs.readFileSync(filePath, 'utf8').split("\n");
  cb(sites);
};

exports.downloadUrls = function(urls){
  if (Array.isArray(urls)) {
    for (var i = 0; i < urls.length-1; i++) {
      http.get(urls[i], mainRoot + '/data/sites/'+urls[i], function(err, result) {
        if(err) {
          throw new Error('Unable to download site: ' + err);
          return;
        } 
        console.log('File downloaded at: ' + result.file);
      });
    }
  }
};
