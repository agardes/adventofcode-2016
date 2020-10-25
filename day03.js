let fs = require('fs');
let read = fs.readFileSync("day03.txt");
let data = read.toString().split('\n').map(el=>el.trim().split('  ').map(Number).filter(el=>el!==0))
let count = 0
let count2 = 0
data.forEach(function (el,i){
    el[0] + el[1] > el[2] && el[0] + el[2] > el[1] && el[1] + el[2] > el[0] ? count++ : undefined
})

console.log("part one = " + count)

for(let i=0;i<data.length-3;i+=3){
    let a = data[i]
    let b = data[i+1]
    let c = data[i+2]
    a[0]+b[0]>c[0] && a[0]+c[0]>b[0] && b[0]+c[0]>a[0] ? count2++ : undefined
    a[1]+b[1]>c[1] && a[1]+c[1]>b[1] && b[1]+c[1]>a[1] ? count2++ : undefined
    a[2]+b[2]>c[2] && a[2]+c[2]>b[2] && b[2]+c[2]>a[2] ? count2++ : undefined
}
console.log("part two = " + count2)
