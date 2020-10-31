let fs = require('fs');
let read = fs.readFileSync("day08.txt");
let data = read.toString().split('\r\n')
let w = 50
let h = 6
let lightsOn = []

for(let i=0;i<data.length;i++){
    let o = data[i].split(' ')
    if(o.length==2){
        let [x,y] = o[1].split('x')
        for(let y2=0;y2<y;y2++){
            for(let x2=0;x2<x;x2++){
                let l = `${y2}-${x2}`
                lightsOn.indexOf(l)<0 ? lightsOn.push(l) : undefined
            }
        }

    }else{
        if(o[1]=="column"){
            let x = o[2].split('=')[1]
            let inc = parseInt(o[4])
            lightsOn = lightsOn.map(function(el){
                let[y2,x2] = el.split('-')
                if(x2==x){
                    let e = `${(parseInt(y2)+inc)%h}-${x}`
                    return e
                }else{
                    return el 
                }
            })
        }else{
            let y = o[2].split('=')[1]
            let inc = parseInt(o[4])
            lightsOn = lightsOn.map(function(el){
                let[y2,x2] = el.split('-')
                if(y2==y){
                    let e = `${y}-${(parseInt(x2)+inc)%w}`
                    return e
                }else{
                    return el 
                }
            })
           
        }
    }
}

console.log("part one = " +lightsOn.length)
let [r, c] = [6, 50]; 
let m = Array(r).fill().map(()=>Array(c).fill("░"));
for(let i=0;i<lightsOn.length;i++){
    let [y,x] = lightsOn[i].split('-')
    m[y][x] = "█"
}

for(let y=0;y<6;y++){
    let c = ""
    for(let x=0;x<50;x++){
        c+=m[y][x]
    }
    console.log(c)
}
