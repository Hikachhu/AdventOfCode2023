const red = /[0-9]+ red/g;
const blue = /[0-9]+ blue/g;
const green = /[0-9]+ green/g;
var message=document.querySelector("body > pre").textContent.split("\n").slice(0, -1)
var decoupe=message.map(c=>{
    var content=c.split(":")[1].split(";")
    console.log(content)
    var nbrRouge=content.map(d=>d.match(red)).filter(e=>e!=null).map(f=>Number(f[0].split(" ")[0])).reduce((a, b) => Math.max(a, b));
    var nbrBlue=content.map(d=>d.match(blue)).filter(e=>e!=null).map(f=>Number(f[0].split(" ")[0])).reduce((a, b) => Math.max(a, b));
    var nbrGreen=content.map(d=>d.match(green)).filter(e=>e!=null).map(f=>Number(f[0].split(" ")[0])).reduce((a, b) => Math.max(a, b));
    return nbrRouge*nbrBlue*nbrGreen;
}).reduce((x, y) => {return x + y}, 0);
console.log(decoupe)