process.stdin.setEncoding("utf-8");
process.stdout.write("\n\n\nYou can type:\nversion - for node version,\nlanguage - for user's language,\nexit - for exit\n");

process.stdin.on("readable", function () {
    var input = process.stdin.read();

    if (input != null) {
        var instruction = input.toString().trim();

        switch (instruction) {
            case "version":
                process.stdout.write("Node version: ");
                process.stdout.write(process.version +"\n\n\n");
                break;

            case "language":
                process.stdout.write("User's language: ")
                process.stdout.write(process.env.LC_CTYPE +"\n\n\n");
                break;

            case "exit":
                process.stdout.write("Quitting app!\n\n\n");
                process.exit();
                break;

            default:
                process.stderr.write("Wrong instruction!\n");
        }
    }
});
