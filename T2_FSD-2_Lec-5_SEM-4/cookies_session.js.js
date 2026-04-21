// server creates session and stores id in browser 
// session ==> destroy 
// cookies ==> delete

// For cookie to store no middleware used,
// for cookie just middleware used for: use ,modify we need middleware
// npm install cookie-parser

express=require('express')
app=express()
cp=require('cookie-parser')
app.use(cp())
app.get('/',(req,res)=>
{
    res.cookie('fname','abc')
        res.cookie('lname','pqr')
            // res.cookie('email','abc123@gmail.com')
                        res.cookie('email','abc123@gmail.com',{maxAge:10000})
res.clearCookie('contact')
    res.cookie('contact','12345')
//  res.send(req.cookies)  ==> will give object of cookies



})
app.listen(5678)


