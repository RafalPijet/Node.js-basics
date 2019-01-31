var fs = require("fs");
var colors = require("colors");

fs.readdir("./", function (err, files) {
   console.log("Reading structure data from directory:\n".blue, files);
   
   fs.writeFile("./result.txt", files, function (err) {

       if (err) throw err;
       console.log("Data save!".cyan.inverse);

       fs.readFile("./result.txt", "utf-8", function (err, data) {
           console.log("Reading structure data from file:\n".red, data.magenta);
       })
   })
});

