http=require('http')
http.createServer((req,res)=>{
    res.write(`<body>
        <p id="demo">
        <script>
        setTimeout(()=>
            {
            document.getElementById("demo").innerHTML="hello"
            },5000)
            </script>
            <body>`)
            res.end()
}).listen(1111)