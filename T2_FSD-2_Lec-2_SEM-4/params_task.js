var express=require('express')
var app=express()
app.get('/user/:id',(req,res)=>
{
const uid=req.params.id
const name=req.query.name
const mark=req.query.mark
// res.send(uid+" "+name+" "+mark+" ")
res.json({
    "message":"Data recieved",
    "params":{"id":uid},
    "query":{"name":mark}
})

})




app.listen(3000)
