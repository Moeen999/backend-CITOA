let http = require('http');
let uc = require('upper-case');
const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!"));
  res.end();
})

server.listen(3000,()=>{
    console.log("server is runnig");
})