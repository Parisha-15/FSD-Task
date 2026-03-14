fs=require('fs')
path=require('path')
a=path.dirname('FSD-mern/path.txt')
b=path.basename('FSD-mern/path.txt')
c=a+'/'+b
fs.mkdir(a,(err)=>
{
    if (err) throw err
    fs.write(c,"same data",(err)=>
    {
        if (err) throw err
        fs.copyFile("FSD-mern/path.txt","FSD-mern/path1.txt",(err)=>
        {
            
        })
    })
})

