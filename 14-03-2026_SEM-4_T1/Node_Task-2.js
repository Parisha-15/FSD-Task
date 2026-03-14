// Defining an array of object with properties name and age. 
// Write this object in a file named student.txt then 
// read the file and display the object on console. 

data=[{"name":"ABC","Age":22},{"name":"pqr","Age":25}]
fs=require('fs')
fs.writeFileSync("data.txt",JSON.stringify(data))
d=fs.readFileSync("data.txt","UTF-8")
console.log(d)

//  JSON Processing
fs.copyFileSync("data.txt","student.txt")
d1=fs.readFileSync("student.txt","UTF-8")
console.log(JSON.parse(d1)[0].name)