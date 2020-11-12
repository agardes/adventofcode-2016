let CryptoJS = require("crypto-js");
let input = "vkjiggvb"
let opened = ['b','c','d','e','f']
let grid = []
for(let y=0;y<4;y++){
    let r=[]
    for(let x=0;x<4;x++){
        y==3 & x== 3 ? r.push('G') : r.push('')
    }
    grid.push(r)
}

function findShort(pos,grid){
    let location = {
        x:pos[0],
        y:pos[1],
        path:[],
        status:'start'
    }
    let q = [location]

    while(q.length>0){
        let curr = q.shift()
        let dirs = ['U','D','L','R']
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

function explore(curr,direction,grid){
    let newPath = curr.path.slice()
    newPath.push(direction)
    let dfl = curr.x
    let dft = curr.y
    direction=='U' ? dft -= 1 : direction=='R' ? dfl += 1 : direction=='D' ? dft += 1 : dfl -= 1
    
    let newLocation = {
        x:dfl,
        y:dft,
        path:newPath,
        status:"unknown"
    }
    newLocation.status = locationStatus(newLocation,grid,direction,curr.path)
    
    if(newLocation.status=="valid"){
        grid[newLocation.y][newLocation.x] = "V"
    }

    return newLocation

}

function locationStatus(location,grid,direction,oldPaths){
    let dft = location.y
    let dfl = location.x
    if(dfl < 0  || dfl >= grid[0].length || dft < 0  || dft>=grid.length){
        return "invalid"
    }else{
        let paths = oldPaths.join('')
        let hash = CryptoJS.MD5(input+paths).toString(CryptoJS.enc.Hex).slice(0,4)
        switch(direction){
            case 'U':
                if(opened.indexOf(hash[0])!==-1){
                    return grid[dft][dfl]=="G" ? 'goal':'valid'    
                }else{
                    return 'invalid'
                }
            case 'D':
                if(opened.indexOf(hash[1])!==-1){
                    return grid[dft][dfl]=="G" ? 'goal':'valid'
                }else{
                    return 'invalid'
                }
            case 'L':
                if(opened.indexOf(hash[2])!==-1){
                    return grid[dft][dfl]=="G" ? 'goal':'valid'
                }else{
                    return 'invalid'
                }
            case 'R':
                if(opened.indexOf(hash[3])!==-1){
                    return grid[dft][dfl]=="G" ? 'goal':'valid'
                }else{
                    return 'invalid'
                }
            
        }
    }
  
}

console.log("Part one = " +findShort([0,0],grid).join(''))