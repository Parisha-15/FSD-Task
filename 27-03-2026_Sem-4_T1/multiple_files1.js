fs = require('fs');
http = require('http');
url = require('url');

http.createServer((req,res)=>{
    file = "."+(req.url=='/'?'/login.html':req.url);
    fs.readFile(file,(err,data)=>{
        if(err){
            res.end('File Not Found');
        } else {
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(data);
        }
    })
}).listen(5693);