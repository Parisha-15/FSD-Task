// action =/savesession
// method=get
expr=require("express")
app=expr()
sess=require("express-session")
app.use(sess({
    secret:'This is key',
    resave:true,
    saveUninitialized:true,
}))

app.use(expr.static("../public",{index:'form.html'}))
app.get('/savesession',(req,res)=>
{
req.session.fname=req.query.fname
req.session.pwd=req.query.pwd
res.redirect('/fetch')
})
app.get('/fetch', (req, res) => {
    res.send(`welcome ${req.session.fname}
        <a href='/destroy'>logout`)
})

app.get('/destroy', (req, res) => {
    // req.session.destroy()
    // res.redirect('/')
    res.clearcookie('connect-sid')
    res.send('cookie clear')
})

app.listen(5678, () => { console.log("Server conected") })