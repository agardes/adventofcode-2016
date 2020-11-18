let input = ".^^^^^.^^^..^^^^^...^.^..^^^.^^....^.^...^^^...^^^^..^...^...^^.^.^.......^..^^...^.^.^^..^^^^^...^."

function day18(total){
    let count = input.split('').filter(el=>el=='.').length
    let lastLine = ''
        for(let i=0;i<total-1;i++){
        let l = i==0 ? input : lastLine
        let n = ''
        for(let j=0;j<input.length;j++){
            let left = j==0 ? '.' : l[j-1]
            let right = j==input.length-1 ? '.' : l[j+1]
            let center = l[j]

            if( (left=="^"&&center=="^"&&right==".") 
            || (center=='^'&&right=="^"&&left==".") 
            || (left=='^' && center=="." && right==".")
            || (right=="^" && center=="." && left==".") ){
                n+="^"
            }else{
                n+="."
            }
        }
        lastLine = n
        count += lastLine.split('').filter(el=>el=='.').length
        }

    return count
}


console.log("Part one = " +day18(40))
console.log("Part two = " +day18(400000))

