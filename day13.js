let input = 1362

function isWall(arr){
    let [x,y] = arr
    if(x < 0  || y < 0){
        return false
    }

    return ((((x*x)+(3*x)+(2*x*y)+y+(y*y)) + input).toString(2).split('').filter(el=>el==1).length) % 2 == 0 ? false : true

}

let grid = []
let p2 = 0
for(let y=0;y<100;y++){
    let raw = []
    for(let x=0;x<100;x++){
        if(isWall([x,y])){
            raw[x] = "#"
        }else if(x==31 && y==39){
            raw[x] = 'G'
        }else{
            raw[x] = '.'
        }
            
    }
    grid.push(raw)
}

const findShort = function(arr,grid){
    let [x,y] = arr

    let location = {
        x:x,
        y:y,
        path:[],
        status:'start'
    }

    let q = [location]

    while(q.length>0){
        let curr = q.shift()
        let dirs = ['north','south','west','east']
        for(let i=0;i<dirs.length;i++){
            let newLocation = explore(curr,dirs[i],grid)
            if(newLocation.status == 'goal'){
                return newLocation.path
            }else if(newLocation.status=='valid'){
                q.push(newLocation)
            }
        }
    }

    return false
}

function locationStatus(location,grid){
    let dft = location.y
    let dfl = location.x
    return dfl < 0  || dfl >= grid[0].length || dft < 0  || dft>=grid.length ? 'invalid' : grid[dft][dfl]=="G" ? 'goal' : grid[dft][dfl]!=='.' ? 'blocked' : 'valid'  
}

function explore(curr,direction,grid){
    let newPath = curr.path.slice()
    newPath.push(direction)

    let dfl = curr.x
    let dft = curr.y
    direction=='north' ? dft -= 1 : direction=='east' ? dfl += 1 : direction=='south' ? dft += 1 : dfl -= 1

    let newLocation = {
        x:dfl,
        y:dft,
        path:newPath,
        status:"unknown"
    }

    newLocation.status = locationStatus(newLocation,grid)
    
    if(newLocation.status=="valid"){
        grid[newLocation.y][newLocation.x] = "V"
    }

    return newLocation
}


console.log("Part one : " +findShort([1,1],grid).length)


