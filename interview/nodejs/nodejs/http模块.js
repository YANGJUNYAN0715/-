var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
  })
  .on("request", function (req, res) {
    const str = `Your request is: ${req.url}, and request method is ${req.method}`;
    console.log(str);
  })
  .listen(8888, function () {
    console.log("server running at http://localhost:8888");
  });
