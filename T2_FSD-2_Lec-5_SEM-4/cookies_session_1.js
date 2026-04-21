express=require('express')
app=express()
cp=require('cookie-parser')
app.use(cp())
app.use(express.static('./'))
app.use(express.urlencoded({extended:true}))
app.post('/data',(req,res)=>{
    const fname=req.body.fname
    const pwd=req.body.pwd
    res.cookie('firstname',fname)
    res.cookie('password',pwd)
    res.redirect('/user')


})

app.get('/user',(req,res)=>
{
    res.send(`username ${req.cookies.firstname} 
        your pwd is ${req.cookies.password}`)
})
app.listen(5672)


// Task-2: Perform (DIY)