process.stdin.setEncoding("utf-8");

function timeFormatting(time) {
    var result = null;

    if (time < 3600) {
        var min = Math.floor(time / 60);
        var sec = time % 60;
        result = min + " min. " + sec + " sec.";
    } else {
        var hour = Math.floor(time / 3600);
        var temp = time % 3600;
        var min = Math.floor(temp / 60);
        var sec = temp % 60;
        result = hour + " hour. " + min + " min. " + sec + " sec.";
    }
    return result;
}

exports.timeMachine = timeFormatting;