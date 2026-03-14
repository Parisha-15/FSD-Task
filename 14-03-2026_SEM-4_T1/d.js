    fs=require('fs')
    fs.writeFile("h1.txt","good day",(err)=>{
        if(err) throw err
        
            console.log("written operation ended")
    
    fs.appendFile("h1.txt","Is it great Day?",(err)=>{
        if(err) throw err
        
            console.log("append done")
        

    fs.readFile("h1.txt","UTF-8",(err,data)=>{
        if (err) throw err
        console.log(data)
        console.log("operation done")

        })

    })
    })

    console.log("Process done")


    