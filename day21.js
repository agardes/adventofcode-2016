let fs = require('fs');
let read = fs.readFileSync("day21.txt");
let data = read.toString().split('\r\n').map(el=>el.split(' '))
let input = "abcdefgh"
let input2 = "fbgdceah"
let arr = ['a',"b","c","d","e","f","g","h"]

function mod(n, m) {
    return ((n % m) + m) % m;
  }

function scrambler(input, operation, reverse=false){
    if(operation[0]=="swap"){
        if(operation[1]=="position"){
            let arr = input.split('')
            let fIndex = parseInt(operation[2])
            let lIndex = parseInt(operation[5])
            arr[fIndex] = input[lIndex]
            arr[lIndex] = input[fIndex]
            return arr.join('')
        }else{
            let a = operation[2]
            let b = operation[5]
            let inA = input.indexOf(a)
            let inB = input.indexOf(b)
            let inp = input.split('')
            inp[inA] = b
            inp[inB] = a
            return inp.join('')
        }
    }else if(operation[0]=='rotate'){
        if(operation.length>4){
            let steps = input.indexOf(operation[6])
            steps = steps > 3 ? steps + 2 : steps + 1
            input = input.split('').map((el,i,arr)=>el = arr[mod(i-steps,arr.length)])
            return input.join('')
        }else{
            let steps = parseInt(operation[2])
            if(operation[1]=="left"){
              input = input.split('').map((el,i,arr)=>el = arr[mod(i+steps,arr.length)])
            }else{
              input = input.split('').map((el,i,arr)=>el = arr[mod(i-steps,arr.length)])
            }
            return input.join('')
        }
    }else if(operation[0]=='reverse'){
        let a = parseInt(operation[2])
        let b = parseInt(operation[4])
        let toReverse = input.split('').slice(a,b+1).reverse()

        let inp = input.split('')
        let r = 0
        for(let i=a;i<=b;i++){  
            inp[i] = toReverse[r]
            r++
        }
        return inp.join('')

    }else if(operation[0]=='move'){
        let a = parseInt(operation[2])
        let b = parseInt(operation[5])
        let inp = input.split('')
        let toAdd = inp[a]
        inp.splice(a,1)
        inp.splice(b,0,toAdd)
        return inp.join('')
    }
}


for(let i=0;i<data.length;i++){
    input = scrambler(input,data[i])
}

console.log("part one = " +input)

let permArr = [],
  usedChars = [];

function permute(input) {
  let i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr
};

let searching = true
let perm = permute(arr)

while(searching){
    for(let i=0;i<perm.length;i++){
        let input = perm[i].join('')
        for(let j=0;j<data.length;j++){
            input = scrambler(input,data[j])
        }
        if(input==input2){
            searching = false
            console.log("Part two = " + perm[i].join(''))
            i = Number.MAX_SAFE_INTEGER
            
        }
        
    }
}

