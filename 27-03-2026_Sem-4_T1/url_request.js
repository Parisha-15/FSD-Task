http=require('http')
http.createServer((req,res)=>{
    if(req.url=="/")
    {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1> hello home page</h1>')
        res.end()
    }
else if(res.url=="/about")
{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end('<h2> This is about page<h2>')
}
else{
    res.writeHead(404,{'Content-Type':'text/plane'})
    res.end('Page not found')
}
}).listen(5678,()=>{
console.log("http://localhost:5000")
})
