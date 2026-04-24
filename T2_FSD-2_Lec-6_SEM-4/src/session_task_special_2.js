// action =/savesession
// some problem in code 

const { urlencoded } = require("express")

// method=get
expr=require("express")
app=expr()
sess=require("express-session")
app.use(sess({
    secret:'This is key',
    resave:true,
    saveUninitialized:true,
}))

app.use(expr.static("../public"))
app.post('/logindata',(req,res)=>
{
req.session.username=req.body.username
req.session.pwd=req.body.pwd
res.redirect('/orderdata')
})

app.post('/orderdata',(req,res)=>
{
    req.session.item=req.body.item
    req.session.qty=req.body.qty
    res.redirect('/fetch')
})
app.get('/fetch', (req, res) => {
    res.send(`welcome ${req.session.username}
        Your Order details are:
        Item details: ${req.session.item},
        Quantity Details: ${req.session.qty},
        <a href='/destroy'>logout`)
})

app.get('/destroy', (req, res) => {
    req.session.destroy()
    res.redirect('/')
    // res.clearcookie('connect-sid')
    // res.send('cookie clear')
})

app.listen(1111, () => { console.log("Server conected") })