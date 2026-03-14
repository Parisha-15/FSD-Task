
path=require('path')
a=path.dirname("D:/Jay/Hi.txt")
console.log(a)
b=path.basename("D:/Jay/Hi.txt")
console.log(b)
c=path.extname("D:/Jay/Hi.txt")
console.log(c)
d=path.parse("D:/Jay/Hi.txt")
console.log(d)
if (d.ext==".txt")
{
    console.log("txt file")
}
else
{
        console.log("txt file not found")

}