var path = require('path');
// var urlMod = require('url');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  // console.log(req.method);

  // if (req.url === '/favicon.ico') {
  //   res.writeHead(200, {'Content-Type': 'image/x-icon'} );
  //   res.end();
  //   console.log('favicon requested');
  //   return;
  // }

  // CSS

  if (req.method === 'GET') {
    res.writeHead(200, httpHelpers.headers);
    console.log('YOU ARE HERE ' + req);
    
    if (req.url === '/styles.css') {
      res.writeHead(200, {'Content-type': 'text/css'});
    }

    if (req.url === '/') {
      var site = path.resolve(__dirname, './public/index.html');
      fs.readFile(site, function (error, data) {
        if(error){
          throw 'BUMMER! ' + error;
        }
        else {
          console.log('SITE is: ' + site);
          console.log(data.toString());
          res.write(data);
          res.end();
        }
      });
    }

    // res.end('SUCESSFUL GET');
  } else if (req.method === 'POST'){
    res.writeHead(200, httpHelpers.headers);
    res.end('SUCESSFUL POST')
  } else if (req.method === 'OPTIONS') {
    res.writeHead(200, httpHelpers.headers);
    
    res.end('SUCESSFUL OPTIONS')
  }
  
  // res.end(archive.paths.list);
};
