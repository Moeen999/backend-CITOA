// todo: Step 1
const http = require("http");
const server = require("./server");
// import http from "http";

// todo: Step 2


// todo: Step 3
const PORT = process.env.PORT || 3000;

// todo: Step 4
server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})
