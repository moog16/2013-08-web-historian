// eventually, you'll have some code here that uses the tested helpers 
// to actually download the urls you want to download.
var urlHelper = require('./lib/html-fetcher-helpers');
var fs = require('fs');
var mainRootArray = __dirname.split("/");
var mainRoot = mainRootArray.slice(0,mainRootArray.length-1).join("/");

urlHelper.readUrls(mainRoot + '/data/sites.txt', function(sites){
  urlHelper.downloadUrls(sites);
});
