let fs = require('fs');
let read = fs.readFileSync("day07.txt");
let data = read.toString().split('\r\n')
let pal = /([a-z])([a-z](?!\1))\2\1/g
let not = /\[\w*([a-z])([a-z](?!\1))\2\1\w*\]/g
let p2 = /([a-z])((?!\1)[a-z])\1.*\[\w*\2\1\2/g
let p3 = /\[\w*([a-z])((?!\1)[a-z])\1((?!\[).*)\w*\]\w*\2\1\2/g
let count = 0
let count2 = 0


for(let i=0;i<data.length;i++){
    data[i].match(pal)  && !data[i].match(not) ? count++ : undefined
    let f = data[i].match(p2)
    let ff = data[i].match(p3)
    if(f){
        let l =  f[0].split('')
        l.indexOf(']') !== -1 &&  l.indexOf(']') < l.indexOf('[') ? undefined : count2++
    }

    if(ff){
        let l = ff[0].split('')
        l.lastIndexOf('[') !== -1 && l.lastIndexOf('[') < l.lastIndexOf(']') ? count2++ : undefined
        
    }
}

console.log("Part one = " +count)
console.log("Part two = " +count2)