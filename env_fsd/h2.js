const http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("How are You ?");
    res.write("<h1>Hello Server</h1>");
    res.end("Hi");
    // res.write("Bye");
}).listen(5678,()=>{
    console.log('Server Connected');
});