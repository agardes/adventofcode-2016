let fs = require('fs');
let read = fs.readFileSync("day12.txt");
let data = read.toString().split('\n').map(el=>el.split(' '))

let i = 0
let finished = false
let registers = {a:0,b:0,c:0,d:0} //// Change to {a:0,b:0,c:1,d:0} for PART TWO
while(!finished){
    let [inst,x,y] = data[i]
    switch(inst){
        case 'cpy':
            registers[y] = isNaN(parseInt(x)) ? registers[x] :  parseInt(x)
            i++
            break
        case 'inc':
            registers[x]++
            i++
            break
        case 'dec':
            registers[x]--
            i++
            break
        case 'jnz':
            registers[x] == 0 ? i++ : i+=parseInt(y)

    }

    if(i>=data.length){
        finished = true
    }
}

console.log("Solution = " + registers["a"])


