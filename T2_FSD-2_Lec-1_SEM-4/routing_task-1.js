// Task-1 Write an express js script to define one JSON array of 3 objects
//  having properties name and age. Short these objects according to age. 
//  If user request sorted names in url then all names along with age 
//  should be printed according to descending order of age. 
//  Also, display these sorted values on “Sort page” and display JSON object
//  on “Home page”.
 
var express=require('express')
var app=express()
let obj=[{name:'abc',age:'28'},
    {name:'pqr',age:'25'},
    {name:'xyz',age:'22'},
]
app.get('/',(req,res)=>
{
    res.send(obj)
})
app.get('/sorted',(req,res)=>
{
    res.type('text/html')
    const age=obj.sort((a,b)=>b.age-a.age)
    for (i of obj)
    {
        res.write()
    }
    res.send()
})
app.listen(3001)
