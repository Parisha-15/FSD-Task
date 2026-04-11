var express=require('express')
var app=express()
app.get('/',(req,res)=>
{
    var obj={'name':'ABC','age':19}
    res.write(JSON.stringify(obj))
    res.send()
})
app.listen(5671)