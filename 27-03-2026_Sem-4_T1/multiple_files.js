addr="http://localhost:5692/login.html"
url=require('url')
http=require('http')
fs=require('fs')
q=url.parse(addr)
qdata=q.pathname
//  read login.html or ./login.html

http.createServer((req,res)=>{
if(req.url==qdata)
{
    data=fs.readFileSync("."+qdata)
    res.end(data)
}
}).listen(5692)
