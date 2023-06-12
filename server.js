var http = require('http');
var fs = require('fs');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/html'});
    var readStream = fs.createReadStream('hello.html');
    readStream.pipe(res);
}).listen(3000);
console.log("Server Running on Port 3000");



