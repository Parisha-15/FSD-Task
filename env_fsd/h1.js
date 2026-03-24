http=require('http')
http.createServer((req,res)=>
{
    res.write("<h1>Hello Server<h1>")
res.end() // IF NOT MENTIONED THEN SERVER WILL BE IN LOADING... STATE
}).listen(5678,()=>
{
    console.log("Server connected")
}
)

