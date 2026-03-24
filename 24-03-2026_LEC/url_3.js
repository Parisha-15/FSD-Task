var url=require("url")
var fs=require("fs")

var addr="http://localhost:8080/data?T1=25&T2=24&T3=23# result update"
process.noDeprecation=true 
var d=url.parse(addr,true)
Test1=parseInt(d.query.T1)
Test2=parseInt(d.query.T2)

Test3=parseInt(d.query.T3)

Avg=(Test1+Test2+Test3)/3
a=JSON.stringify(Avg)
console.log(Avg)

fs.writeFileSync("Avg.txt",a)