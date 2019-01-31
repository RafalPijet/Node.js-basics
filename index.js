var OSinfo = require("./modules/OSinfo");
var EventEmitter = require("events").EventEmitter;
var fs = require("fs");
var StatMode = require("stat-mode");
var emitter = new EventEmitter();

process.stdin.setEncoding("utf-8");

emitter.on("beforeCommand", function (instruction) {
    console.log("You wrote: " + instruction + ", trying to run command");
});

emitter.on("afterCommand", function () {
    console.log("Finished command");
});

fs.stat("./cat.jpeg", function (err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

fs.readFile("./tekst.txt", "utf-8", function (err, data) {
    console.log("Dane przed zapisem!".blue)
    console.log(data);
    fs.appendFile("./tekst.txt", "\nA tak wyglądają po zapisie!", function (err) {
        if (err) throw err;
        console.log("Zapisano!".blue);
        fs.readFile("./tekst.txt", "utf-8", function (err, data) {
            console.log("Dane po zapisie!".blue);
            console.log(data);
        });
    });
});


process.stdin.on("readable", function () {
   var input = process.stdin.read();

   if (input !== null) {
       var instruction = input.trim();
       emitter.emit("beforeCommand", instruction);

       switch (instruction) {
           case "/exit":
               process.stdout.write("Quitting app!\n");
               process.exit();
               break;
           case "/sayhello":
               process.stdout.write("hello\n");
               break;
           case "/getOSinfo":
               OSinfo.print();
               break;
           default:
               process.stdout.write("Wrong instruction!\n");
       }
       emitter.emit("afterCommand");
   }
});
