var os = require('os');

function getOSinfo() {
    var info = os.type();
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();

    if (info == "Darwin") {
        info = "OSX";
    } else if (info == "Windows_NT") {
        info = "Windows";
    }

    console.log("System: ", info);
    console.log("Release: ", release);
    console.log("CPU model: ", cpu);
    console.log("Uptime: ~", (uptime / 60).toFixed(0), 'min');
    console.log("User name: ", userInfo.username);
    console.log("Home dir: ", userInfo.homedir);
}

exports.print = getOSinfo();
