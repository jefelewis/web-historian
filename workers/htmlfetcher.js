// Use the code in `archive-helpers.js` to actually download the urls
// that are waiting.
var helpers = require('../helpers/archive-helpers');

// helpers.readListOfUrls();

// helpers.addUrlToList(paths.list, )

// helpers.isUrlInList('www.google.com', function () {

// })

helpers.readListOfUrls(function (urls) {
    console.log(urls);
});