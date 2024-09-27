const http = require("http");
const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
res.write("Welcome to node js")

  res.end("Hello, World!\n");
});

// The server listens on port 3000
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
