let fs = require('fs');
let read = fs.readFileSync("day06.txt");
let data = read.toString().split('\r\n').map(el=>el.split(''))
let word = ""
let word2 = ""
let length = 8

for(let u=0;u<length;u++){
    let c = {}
    for(let i=0;i<data.length;i++){
        let l = data[i][u]
        c[l] ? c[l]++ : c[l] = 1
    }
    let o = Object.fromEntries(Object.entries(c).sort(([,a],[,b]) => b-a))
    word += Object.keys(o)[0]
    let p = Object.fromEntries(Object.entries(c).sort(([,a],[,b]) => a-b))
    word2 += Object.keys(p)[0]
}

console.log("Part one = " + word)
console.log("Part two = " + word2)
