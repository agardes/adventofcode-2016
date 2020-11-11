let CryptoJS = require("crypto-js");
let salt = 'cuanljph'
let i = 0
let regex = /(\w)\1\1/
let searching = true
let occ = {}
let keys = 0
let partTwo = false ///////// Change to true for PART TWO

while(searching){
    let w = `${salt}${i}`
    let hash = partTwo ? partTwoHash(CryptoJS.MD5(w).toString(CryptoJS.enc.Hex),0): CryptoJS.MD5(w).toString(CryptoJS.enc.Hex)
    if(Object.keys(occ).length>0){
        for (const [index, arr] of Object.entries(occ)) {
            let [letter, maxIndex, available] = arr
            let reg  = new RegExp(`${letter}{5}`)
            if(i <= maxIndex && hash.match(reg) && available){
                keys++
                if(keys==64){
                    console.log('solution = ' + index)
                    searching = false
                }
                arr[2] = false
            }
        }
    }
    
    
    if(hash.match(regex)){
        let letter = hash.match(regex)[1]
        let item = [letter,(i+1000),true]
        occ[i] = item
    }
    i++
}


function partTwoHash(str,i){
    if(i==2016){
        return str
    }else{
        i++
        return partTwoHash(CryptoJS.MD5(str).toString(CryptoJS.enc.Hex),i)
    }
}
