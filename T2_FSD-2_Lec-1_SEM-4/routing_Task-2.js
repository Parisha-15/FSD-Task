// rOUTING tASK-2

var express=require('express')
var app=express()

app.get('/user/:uid/test/:test',(req,res)=>
{

    // res.send('User with id= '+req.params) object apse
    res.send('User with id= '+req.params.id)
})
app.listen(5007)


