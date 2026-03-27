fs = require('fs');
http = require('http');

http.createServer((req,res)=>{
    if (req.url=='/'){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>Hello</h1><br><img src='a.jpeg' alt='err'>")
        res.end();
    } else if (req.url=='/a.jpeg') {
        data = fs.readFileSync('a.jpeg');
        res.writeHead(200,{"Content-Type":"image/jpeg"});
        res.end(data);
    }
}).listen(5678);