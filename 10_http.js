const server = require('http').createServer();
const fs = require("fs");

server.on('request', (req, res) => {
  console.log(req.url)
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json"});
    res.end("{\"content\": \"data\"}");
  } else if (req.url === "/file"){
    // non stream
    fs.createReadStream
    fs.readFile('./big.txt', (err, data) => {
      if (err) throw err;

      res.end(data);
  });

  //stream
  // const src = fs.createReadStream('./big.txt');
  // src.pipe(res)
}
})

server.listen(8080)
