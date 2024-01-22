var fs = require("fs");

// Asynchronous read
fs.readFile('welcome.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log( data.toString());
});