let fs = require('fs');
let read = fs.readFileSync("day04.txt");
let data = read.toString().split('\r\n').map(el=>el.split('-'))
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let sum = 0

for(let i=0;i<data.length;i++){
    let letters = {}
    let uncrypted = ""
    let el = data[i]
    let id = parseInt(el[el.length-1])
    let checksum = el[el.length-1].slice(-6).slice(0, -1)
    for(let j=0;j<el.length-1;j++){
        let w = el[j]
        for(let k=0;k<w.length;k++){
            uncrypted+=alphabet[(alphabet.indexOf(w[k])+id)%alphabet.length]
            letters[w[k]] ? letters[w[k]]++ : letters[w[k]] = 1
        }
    }
    
    uncrypted=="northpoleobjectstorage" ? console.log('Part two = ' + id) :undefined
    const l = Object.entries(letters).sort((a, b) =>{
        if(b[1] - a[1]==0){
            return alphabet.indexOf(a[0]) - alphabet.indexOf(b[0])
        }else{
            return b[1] - a[1]
        }})
        .reduce((a, [key, val]) => {
            a[key] = val;
            return a;
        }, {});

    let commonLetters = Object.keys(l).slice(0,5).join('')
    commonLetters == checksum ? sum+=id : undefined
}

console.log("Part one = " +sum)