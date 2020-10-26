let CryptoJS = require("crypto-js");
let door = "reyedfim"
let code = ""
function partOne(){
    let i = 0
    let searching = true
    while(searching){
        let k = `${door}${i}`
        let h = CryptoJS.MD5(k).toString(CryptoJS.enc.Hex).slice(0,6)
        if(h.slice(0,5)=="00000"){
            code+=h.charAt(h.length-1)
        }
        if(code.length==8){
            searching = false
        }
        i++
    }
    console.log('Part one = ' + code)
}

function partTwo(){
    let i = 0
    let searching = true
    let f = 0
    let code = ['','','','','','','','']
    while(searching){
        let k = `${door}${i}`
        let h = CryptoJS.MD5(k).toString(CryptoJS.enc.Hex).slice(0,7)
        let pos = h.charAt(h.length-2)
        if(h.slice(0,5)=="00000" && !isNaN(pos) && pos < 8 && code[pos] == ''){
            code[pos] = h.charAt(h.length-1)
            f++
        }
        if(f==8){
            searching = false
        }
        i++
    }
    console.log('Part two = ' + code.join(''))
}
partOne()
partTwo()