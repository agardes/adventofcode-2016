let length = 272   ///////// Change value for PART TWO
let input = 10001110011110000

function dragon(nb){
    let a = nb.toString()
    let b = a.toString().split('').reverse().map(el=>{return el == '0' ? 1 : 0}).join('')
    let res = a+0+b
    if(res.length<length){
        return dragon(res)
    }else{
        return res.slice(0,length)
    }
}

function checksum(nb){
    let a = nb.split('')
    let n = ''
    for(let i=0;i<a.length;i+=2){
        a[i] ==  a[i+1] ? n+= '1' : n+= '0'
    }  
    return n.length%2==0 ? checksum(n) : n
}


console.log("Solution : " +checksum(dragon(input)))