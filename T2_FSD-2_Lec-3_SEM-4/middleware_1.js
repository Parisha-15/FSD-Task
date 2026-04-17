// use postman ==> to make your CRUD poperation understand easily

express=require('express')
app=express()

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send(`<form action='/data' method='post' >
        Username:<input type='text' name='uname'>
        <input type='Submit'>
        </form>`)
})
app.post('/data', (req, res) => {
    uname = req.body.uname
    res.send(`Welcome ${uname}`)
})
app.listen(5623, () => {
    console.log('Server Started')
})
