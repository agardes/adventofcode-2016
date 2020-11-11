let discs = [[5,2],[13,7],[17,10],[3,2],[19,9],[7,0]] //// PART ONE - [totalPositions, startingPosition]
// let discs = [[5,2],[13,7],[17,10],[3,2],[19,9],[7,0],[11,0]] //// PART TWO - [totalPositions, startingPosition]

for(let i=0;i<Number.MAX_SAFE_INTEGER;i++){
    let c = 0
    for(let j=0;j<discs.length;j++){
        let add = i+(j+1)
        if( (discs[j][1]+add) % discs[j][0] == 0 ){
            c++
        }
    }

    if(c==discs.length){
        console.log("Solution = " + i)
        i=Number.MAX_SAFE_INTEGER
    }
}

