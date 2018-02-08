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
  testArchives: path.join(__dirname, '../test/testdata/sites'),
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
  fs.readFile(exports.paths.list, function(error, data){
    // If Error exits, throw error
    if(error){
      throw error;
    }
    // Else, run callback on data
    else{
      // Assign the data to an array an split by '\n' (New line)
      var list = data.toString().split('\n');
      // Run callback on list
      return callback(list);
    }
  })
};


exports.isUrlInList = function(url, callback) {
    this.readListOfUrls(function (arr) {
      // If URL is in list, return true
      return callback(arr.includes(url));
  })
};


exports.addUrlToList = function(url, callback) {
  this.isUrlInList(url, function (bool) {
    if (!bool) {
      fs.appendFile(exports.paths.list, '\n' + url, function (error) {
        if (error) {
          throw error;
        }
        callback(bool);
      })
    }
  });
};


exports.isUrlArchived = function(url, callback) {
  fs.readdir(exports.paths.archivedSites, function (error, files) {
    if (error) {
      throw 'Error on isUrlArchived + ' + error;
    }
    callback(files.includes(url));
  });
};


exports.downloadUrls = function(urls) {

};
