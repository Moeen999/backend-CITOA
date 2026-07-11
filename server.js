const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end("Hey nigga!")
})

module.exports= server;