var express=require('express')
var app=express()
app.get('/',(req,res)=>
{
    res.set('Content-type','text/html')
    res.sent('<b>Hello<b>')
})
app.listen(3000,()=>
{
    console.log("server ended")
})