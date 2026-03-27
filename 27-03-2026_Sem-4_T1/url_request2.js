http=require('http')
http.createServer((req,res)=>{
    if(req.url=="/")
    {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write("<li><a href='/'>Home<a><li>")
        res.write("<li><a href='/about'>About<a><li>")
        res.write("<li><a href='/contact'>Contact<a><li>")

        res.end()
    }
else if(req.url=="/about")
{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end('<h2> This is about page<h2>')
}
else if(req.url=="/contact")
{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end('<h2> This is contact page<h2>')
}
else{
    res.writeHead(404,{'Content-Type':'text/plane'})
    res.end('Page not found')
}
}).listen(1111,()=>{
console.log("http://localhost:5000")
})
