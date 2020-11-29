let Astar = require("javascript-astar");
let fs = require('fs');
let read = fs.readFileSync("day24.txt");
let locations = {}

let data = read.toString().split('\r\n').map((el,y,arr)=>el.split('')
           .forEach((el,x,arr)=>el!=="#" && el!=="." ? 
           locations[el] = [y,x] :
           undefined ))

let l = Object.keys(locations).length
let graph = new Astar.Graph(read.toString().split('\r\n').map((el)=>el.split('').map(el=>el=="#" ? 0 : 1)))
let distances = {}
for(let i=0;i<l;i++){
    i==0 ? distances[i] = {} : undefined
    for(let j=0;j<l;j++){
        if(i==0 && j>0){
            distances[j] = {}
        }
        if(j==i || distances[j][i]){
            continue
        }
        let [yStart,xStart] = locations[i.toString()]
        let [yStop,xStop] = locations[j.toString()]
        let start = graph.grid[yStart][xStart]
        let end = graph.grid[yStop][xStop]
        let m = Astar.astar.search(graph, start, end).length;
        distances[i][j] = m
        distances[j][i] = m
    }
}

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


let perm = permute([1,2,3,4,5,6,7])
let minSteps = Number.MAX_SAFE_INTEGER

for(let i=0;i<perm.length;i++){
    let t = 0
    for(let j=0;j<perm[i].length;j++){
      if(j==0){
          t+=distances['0'][perm[i][j].toString()]
      }else{
          t+=distances[perm[i][j-1].toString()][perm[i][j].toString()]
      }
      t>minSteps ? j = perm[i].length : undefined
    }
    // t+=distances['0'][perm[i][perm[i].length-1]] /// UNCOMMENT FOR PART TWO
    minSteps = t<minSteps ? t : minSteps

}
console.log("Solution = " + minSteps)
