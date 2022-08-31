const http = require("http");
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  // res.end("Hello World\n");
});
server.on("request", (req, res) => {
  const url = req.url;
  const method = req.method;
  console.log(`Your request is: ${url}, and request method is ${method}`);
  res.end("Hello\n");
});
server.listen(80, () => {
  console.log("server is running on http://127.0.0.1");
});
