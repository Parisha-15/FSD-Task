var url=require("url")
var addr="http://localhost:8080/data?name='abc' and age=25 # about"
process.noDeprecation=true 
//  if used above statement no warning for 
var d=url.parse(addr,true)
console.log(d)
console.log(d.protocol)
console.log(d.search)
console.log(d.query)
 console.log(d.query.name) //aa undefined if addr,true ma true na lakhiye toh
