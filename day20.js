let fs = require('fs');
let read = fs.readFileSync("day20.txt");
let data = read.toString().split('\n').map(el=>el.split('-').map(Number))

function day20(part){
    let count = 0
    for(let i=0;i<=4294967295;i++){
        for(let j=0;j<data.length;j++){
            if(i>=data[j][0] && i<=data[j][1]){
                i=data[j][1]
                j=data.length
            }else{
                j==data.length-1 ? part=="one" ? (console.log('Part one = ' + i),i=4294967296 ): count++ : undefined
            }
        }
    }
    part=="two" ? console.log('Part two = ' + count) : undefined
}

day20('one')
day20('two')