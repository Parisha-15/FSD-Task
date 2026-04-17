//Middleware is a fn 
 //Get Post Put Delete (CRUD)
// app.get('/data') ==> then sub cant be expressed eg: /data (will execute) , Eg:  /data/Hi (will not execute)
// app.use('/data') ==> can access sub path

// app.use(path,middlewares...)
// app.get(path,(req,res)=>{ })
// Route.app.get(path,middlewares...,(req,res)=>{ })

express=require('express')
app=express()
const a=(req,res,next)=>
{
    req.uname='abc'
    console.log('uname inserted')
    next()
}
const b=(req,res,next)=>
{
    req.mark=20+3
    console.log('mark inserted')
    next()
}
app.use('/data',a,b)
app.get('/data', (req, res) => {
    res.send("uname = " + req.uname + " mark = " + req.mark)
})

app.listen(5623, () => {
    console.log('Server Started')
})