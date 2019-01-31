process.stdin.setEncoding("utf-8");

process.stdin.on("readable", function () {
   var input = process.stdin.read();
   var OSinfo = require("./modules/OSinfo").print;

   if (input !== null) {
       var instruction = input.trim();

       switch (instruction) {
           case "/exit":
               process.stdout.write("Quitting app!\n");
               process.exit();
               break;
           case "/sayhello":
               process.stdout.write("hello\n");
               break;
           case "/getOSinfo":
               OSinfo;
               break;
           default:
               process.stdout.write("Wrong instruction!\n");
       }
   }
});
