// var url=require("url") not needed as node absorbs url

var addr="http://localhost:8080/data?T1=25&T2=24&T3=23# result update"
var myurl= new URL(addr)
console.log(myurl)
// process.noDeprecation=true not needed as no warning