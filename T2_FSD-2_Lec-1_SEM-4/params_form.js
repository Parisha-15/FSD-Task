var express=require('express')
var app=express()
app.use(express.urlencoded({ extended: true }))
app.get('/',(req,res)=>{
    res.send(`<h1> User form <h1>
        <form action="/data" method="post" >
        Uname: <input type="text" name="uname">
        Age: <input type="text" name="age">
        <button type="submit">Submit</button>
        <form>`)

})
app.post('/data',(req,res)=>{
    // name=req.query.uname
    // age=req.query.age
    name=req.body.uname
    age=req.body.age
    res.send('Name:'+name+'Age:'+age)

})
app.listen(5678,()=>{
    
})
// for form search & filter for get method in form so form has always method as post 
// to make form inside server post only 
//from url u want to read form method=get => so for search and filter 
// app.use(express.urlencoded({ extended: true }))  extended :true for qs access library
 // express.urlencoded ==> middleware . so the mention path accesible to every sub path of the mentioned port
// if path /login so login and its sub part

// Syntax:  app.use(Path,middleware)