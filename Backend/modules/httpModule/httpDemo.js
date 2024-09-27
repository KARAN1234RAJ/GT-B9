const http = require("http");
const server = http.createServer((req, res) => {
  //   res.write("Welcome to node js");
  if (req.url === "/login") {
    console.log(req.url);

    res.write("<h1>Welcome to login Page!</h1>");
  } else if (req.url === "/about") {
    res.write("<h1>Welcome to About Page !</h1>");
  } else {
    res.write("<h1>Welcome to node js</h1>");
  }
  res.end("<h1>Hello, World!</h1>");
});
// The server listens on port 3000
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
