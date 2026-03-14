// Create JSON object which contains array of objects. Calculate perimeter of 
// square and perimeter of circle 
// by using side value and diameter value respectively. 
// And object as well as calculated  data in shape.txt	
// const shape=[{name:"circle",diameter:8},{name:"square",side:10}]


const shape=[{name:"circle",diameter:8},{name:"square",side:10}]

fs=require('fs')
fs.writeFileSync("shape.txt",JSON.stringify(shape))
a1=fs.readFileSync("shape.txt","UTF-8")
console.log(a1)
sq1=4*(a1[1].side)
fs.appendFileSync("Perimeter of sq"+sq1)
console.log("Perimeter of sq"+sq1)
c1=3.14*((a1[0].diameter)/2)*2
fs.appendFileSync("Perimeter of circle"+c1)
console.log("Perimeter of circle"+c1)

