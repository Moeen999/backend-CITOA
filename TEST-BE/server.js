// const crypto = require('crypto');

// let pass = 1297319231;
// // Create a SHA-256 hash of a string
// const hash = crypto.createHash('sha256')
//   .update(pass.toString())
//   .digest('hex');
// console.log('SHA-256 Hash:', hash);


// let name = "fakeer";

// name = 10;
// console.log(name);


//! this is how we create a server in node

 const http = require('http');

  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<h1>Welcome to my Node.js server!</h1>
    <p>This is a simple server created using Node.js.</p>
    <p>Request URL: ${req.url}</p>
    <p>Request Method: ${req.method}</p>
    `);
  });

  const PORT = 3000;

    server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });


  