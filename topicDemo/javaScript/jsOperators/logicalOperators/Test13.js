let config = {
  server: {
    host: "localhost",
  },
};

let host = config?.server?.host ?? "defaultHost";
let port = config?.server?.port ?? 8080;

console.log(host); 
console.log(port); 
