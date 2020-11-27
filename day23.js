let fs = require('fs');
let read = fs.readFileSync("day23.txt");
let data = read.toString().split('\n').map(el=>el.split(' '))

let i = 0
let finished = false
let registers = {a:7,b:0,c:0,d:0} 
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
            if(registers[x]!==undefined && !isNaN(y)){
                registers[x] == 0 ? i++ : parseInt(y)==0 ? i++ : i+=parseInt(y)
            }else if(registers[x]!==undefined && isNaN(y)){
                registers[x] == 0 ? i++ :  registers[y]==0 ? i++ : i+=registers[y]
            }else if(registers[x]==undefined && !isNaN(y)){
                parseInt(x) == 0 ? i++ : parseInt(y)==0 ? i++ : i+=parseInt(y)
            }else{
                parseInt(x) == 0 ? i++ : registers[y]==0 ? i++ : i+=registers[y]
            }
            
            break
        case 'tgl':
            let g = registers[x]
            if(data[i+g]==undefined){

            }else if(data[i+g].length==2){
                data[i+g][0] = data[i+g][0]=='inc'?'dec':'inc'
            }else{
                data[i+g][0] = data[i+g][0]=='jnz'?'cpy':'jnz'
            }

            i++

    }

    if(i>=data.length){
        finished = true
    }
}

console.log("Part one = " + registers["a"])


