const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the Home Page!\n");
  } else if (req.method === "GET" && req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is the About Page.\n");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found\n");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
