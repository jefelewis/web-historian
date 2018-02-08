var path = require('path');
// var urlMod = require('url');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');
// require more modules/folders here!

// exports.css = function (req, res) {
  // if (req.url.indexOf('.css')) {
//     res.writeHead(200, {'Content-type': 'text/css'});
//     var css = path.resolve(__dirname, './public/styles.css');
//     fs.readFile(css, function (err, data) {
//       if (err) {
//         throw err;
//       } else {
//         res.write(data);
//         res.end();
//       }
//     })
//   }
// };

exports.handleRequest = function (req, res) {
  // If Request Method is GET
  if (req.method === 'GET') {
    // console.log('REQ URL ' + req.url);

    if (req.url === '/') {
      res.writeHead(200, {'Content-type': 'text/html'});
      var site = path.resolve(__dirname, './public/index.html');
      fs.readFile(site, function (error, data) {
          if(error){
            throw 'BUMMER! ' + error;
          }
          else {
            res.write(data);
            res.end();
          }
        });
    }

  } else if (req.method === 'POST'){
    // Write to Headers
    res.writeHead(200, httpHelpers.headers);

    // Grab data
    let result = '';
 
    req.on('data', function(chunk){
      result += chunk;
    })

    // Request: On End
    req.on('end', function () {
      let inputURL = result.slice(4)

      // Check if the URL already exits
      archive.isUrlInList(inputURL, function (bool) {
        if (bool) {
          console.log('Exists');
          archive.isUrlArchived(inputURL, function (bool2) {
            if (bool2) {
              console.log(bool2);
            } else {
              res.end('SORRY. STILL WORKING ON IT.');
            }
          })
          // Download URL from Sites folder

          // Pass the data to the user

        } else {
          console.log('Does NOT exist');
          // Add to List
          archive.addUrlToList(inputURL, function(){
            console.log('do some work');
          });
          // Add to Sites folder
          archive.downloadUrls(inputURL, function(){
            console.log('URL added to sites folder');
          })
        }
      });
    })


    // res.end('SUCESSFUL POST')


  } else if (req.method === 'OPTIONS') {
    res.writeHead(200, httpHelpers.headers);
    
    res.end('SUCESSFUL OPTIONS')
  }

  // res.end(archive.paths.list);
};
