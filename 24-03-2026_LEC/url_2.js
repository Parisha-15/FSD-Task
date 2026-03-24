var url=require("url")
var addr="http://localhost:8080/data?month='march' and year=2026 # war update"
process.noDeprecation=true 
var d=url.parse(addr,true)
leap=d.query.year
if(leap%4==0)
{
    console.log("Leap year")
}
else
{
        console.log("Not a Leap year")

}