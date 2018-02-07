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
  // console.log(req.method);

  // if (req.url === '/favicon.ico') {
  //   res.writeHead(200, {'Content-Type': 'image/x-icon'} );
  //   res.end();
  //   console.log('favicon requested');
  //   return;
  // }

  function getSite(res, path) {
    fs.readFile(path, function (error, data) {
      if(error){
        throw 'BUMMER! ' + error;
      }
      else {
        res.write(data);
        // res.end();
      }
    });
  }

  // If Request Method is GET
  if (req.method === 'GET') {
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
    res.writeHead(200, httpHelpers.headers);
    res.end('SUCESSFUL POST')
  } else if (req.method === 'OPTIONS') {
    res.writeHead(200, httpHelpers.headers);
    
    res.end('SUCESSFUL OPTIONS')
  }

  // res.end(archive.paths.list);
};
