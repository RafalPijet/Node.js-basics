var http = require("http");
var fs = require("fs");
var server = http.createServer();

server.on("request", function (request, response) {

    if (request.method === "GET" && request.url === "/") {

        fs.readFile("./index.html", function (err, data) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.end(data);
        })
    } else {
        var img = fs.readFileSync("./error.jpg");
        response.writeHead(404, {"Content-Type": "image/jpeg"});
        response.end(img, "binary");
    }
});
server.listen(9000);

