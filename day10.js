let fs = require('fs');
let read = fs.readFileSync("day10.txt");
let data = read.toString().split('\r\n')

let inst = {}
let bots = {}

for(let i=0;i<data.length;i++){
    if(data[i][0]=='b'){
        let [,id,,,,typeL,low,,,,typeH,high] = data[i].split(' ')
        let instruc = [typeL,low,typeH,high]
        inst[id] ? inst[id].push(instruc) : inst[id] = [instruc]
        checkForBots(id)
    }else{
        let val = data[i].split(' ')[1]
        let id = data[i].split(' ')[5]
        if(!bots[id]){
            bots[id] = [val]
        }else{
            bots[id].push(val)
            checkForBots(id)
        }
    }
}

function checkForBots(id){
    if(bots[id] && bots[id].length>1 && inst[id] && inst[id].length>0){
        for(let i=0;i<inst[id].length;i++){
            let low = parseInt(bots[id][0]) < parseInt(bots[id][1]) ? bots[id][0] : bots[id][1] 
            let high = parseInt(bots[id][0]) > parseInt(bots[id][1]) ? bots[id][0] : bots[id][1]
            let idLow = inst[id][i][1]
            let idHigh = inst[id][i][3]
            if(low=='17' && high=="61"){
                console.log('Part one = ' + id)
            }
            if(inst[id][i][0]=="bot"){
                bots[idLow] ? (bots[idLow].push(low),checkForBots(idLow)) :  bots[idLow] = [low]
            }else{
                let o = `o${idLow}` 
                bots[o] ? bots[o].push(low) :  bots[o] = [low]
            }
            if(inst[id][i][2]=="bot"){
                bots[idHigh] ? (bots[idHigh].push(high),checkForBots(idHigh)) :  bots[idHigh] = [high]
            }else{
                let o = `o${idHigh}` 
                bots[o] ? bots[o].push(high) :  bots[o] = [high]
                
            }
            inst[id].splice(i,1)
        }
    }
}

console.log("Part two = " + parseInt(bots['o0']) * parseInt(bots['o1']) * parseInt(bots['o2']))