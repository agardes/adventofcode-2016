let input = 3004953

let arr = [...Array(input).keys()].map(i => i + 1).filter(el=>el%2!==0)
let lastUsed = arr[arr.length-1]
let f = input%2!==0  

console.log("Part one = " + recursive(arr,f))


function recursive(arr,f){
    let newArr = f ? arr.filter((el,i,arr)=>i%2!==0) : arr.filter((el,i,arr)=>i%2==0)  
    f = newArr[newArr.length-1] == lastUsed 
    lastUsed = newArr[newArr.length-1]
    return newArr.length==1 ? newArr[0] : recursive(newArr,f)
}





