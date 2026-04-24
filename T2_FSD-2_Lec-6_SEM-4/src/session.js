
// For Aptitude on sites https://sites.google.com/view/buildstack/home/aptitude2233

// https is stateless it won't remember you 
// express/session for that we need cookie-parser
// Uninitialized ==> false by defult for login/ signup should be false but after filling form
//  redirect to payment page  directly so Uninitialized ==> true
expr=require("express")
app=expr()
sess=require("express-session")
app.use(sess({
    secret:'This is key',
    resave:false,
    saveUninitialized:false
}))
app.get('/',(req,res)=>
{
    if(req.session.a)
    {
        req.session.a++
        res.send(`you visited this page ${req.session.a} time`)
    }
    else{
        req.session.a=1
        res.send('Welcome User')
    }
})
app.listen(5555,()=>{'server ended'})



// req.session returns obj
//connect.sid ==> session id remembers till we dont delete manually