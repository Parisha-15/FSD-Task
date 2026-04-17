//Middleware is a fn 
 //Get Post Put Delete (CRUD)
// app.get('/data') ==> then sub cant be expressed eg: /data (will execute) , Eg:  /data/Hi (will not execute)
// app.use('/data') ==> can access sub path

// app.use(path,middlewares...)
// app.get(path,(req,res)=>{ })
// 

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
    // if u want to use backtick then store req.uname in some variable then ${var_name}
})

app.get('/data/a',(req,res)=>
{
    res.send("only usena,me through middleware="+req.uname)
})

app.listen(5623, () => {
    console.log('Server Started')
})