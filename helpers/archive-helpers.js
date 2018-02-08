var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  // Read sites.txt file
  fs.readFile(this.paths.list, function(error, data){
    // If Error exits, throw error
    if(error){
      throw error;
    }
    // Else, run callback on data
    else{
      // Assign the data to an array an split by '\n' (New line)
      var list = data.toString().split('\n');
      // Run callback on list
      callback(list);
    }
  })
};

exports.isUrlInList = function(url, callback) {
  // 
  var list = readListOfUrls(url);

  // Return boolean
};

exports.addUrlToList = function(url, callback) {
  // Capture URL from Input

  // Write to sites.txt

};

exports.isUrlArchived = function(url, callback) {
};

exports.downloadUrls = function(urls) {
};
