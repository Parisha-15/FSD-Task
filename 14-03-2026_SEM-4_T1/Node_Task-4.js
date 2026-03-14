//  Write node js script and json to perform below tasks. 

// 1.	Write below object in txt file named input.txt  

// {data:{a:15,b:20,c:[40,30]}}

// 2.	Read data from the same file and perform the below tasks.

// a.	addition of a and b.

// b.	subtraction of 2nd element of c and b. (Must be positive value)

// c.	multiplication of elements of c.

// 3.	Add the Output of addition, subtraction and multiplication below the object in output.txt file.

const d={data:{a:15,b:20,c:[40,30]}}
fs=require('fs')
fs.writeFileSync("input.txt",JSON.stringify(d))
r1=fs.readFileSync("input.txt","UTF-8")
add=r1["data"][0][0]+r1["data"][0][1]
sub=r1["data"][0][2][0]-r1["data"][0][1]
mul=r1["data"][0][2][0]*r1["data"][0][2][1]
