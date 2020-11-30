let fs = require('fs');
let read = fs.readFileSync("day25.txt");
let data = read.toString().split('\n').map(el=>el.split(' '))
let p = true
for(let i=0;i<Number.MAX_SAFE_INTEGER;i++){
    
    t(i)
    p==false ? i = Number.MAX_SAFE_INTEGER : undefined
}
function t(u){
    let outp = ""
    let i = 0
    let finished = false
    let registers = {a:u,b:0,c:0,d:0} 
    let last
    let count = 0
    while(!finished){
        let [inst,x,y] = data[i]
        switch(inst){
            case 'out':
                let el = isNaN(parseInt(x)) ? registers[x] : x
                outp+=el
                if(count==0){
                    last = el
                    count++
                }
                else if(last==el){
                    finished = true
                }else{
                    last = el
                    count++
                }
                i++
                if(count>=100){
                    finished = true
                    p = false
                    console.log('Part one = ' + u)
                }
                break
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
    
}



