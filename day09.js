let fs = require('fs');
let read = fs.readFileSync("day09.txt");
let data = read.toString()

let c = 0
for(let i=0;i<data.length;i++){
    if(data[i]!=="("){
        c++
    }else{
        let a = data.indexOf("x",i)
        let nxt = parseInt(data.substring(i+1,a))
        let close = data.indexOf(")",i)
        let nb = parseInt(data.substring(a+1,close))
        c+=nxt*nb
        i = close + nxt
    }
}

console.log("Part one = " +c)

let w = data.split('').map(el=>1)
let partTwo = 0
for(let i=0;i<data.length;i++){
    if(data[i]=='('){
        let a = data.indexOf("x",i)
        let nxt = parseInt(data.substring(i+1,a))
        let close = data.indexOf(")",i)
        let nb = parseInt(data.substring(a+1,close))
        for(let u=close+1;u<close+1+nxt;u++){
            w[u] *= nb
        }
        i = close 
    }else{
        partTwo += w[i]
    }
}

console.log("Part two = " +partTwo)
