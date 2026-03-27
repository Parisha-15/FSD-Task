
http = require('http')
http.createServer((req, res) => {
    setTimeout(() => {
        res.write('Welcome')
        res.end()
    }, 5000)
}).listen(5678)

//server side loading
//loaderload thase
//output after 5 sec