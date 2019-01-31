var os = require('os');
var colors = require('colors');
var reformat = require("./timeFormat").timeMachine;

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

    console.log("System: ".grey, info);
    console.log("Release: ".red, release);
    console.log("CPU model: ".blue, cpu);
    console.log("Uptime: ".green, reformat(uptime));
    console.log("User name: ".yellow, userInfo.username);
    console.log("Home dir: ".white, userInfo.homedir);
}

exports.print = getOSinfo();
