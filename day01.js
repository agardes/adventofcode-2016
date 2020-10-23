let fs = require('fs');
let read = fs.readFileSync("day01.txt");
let data = read.toString().split(',').map(el=>el.trim())
let places = []

let me = {
    facing:'N',
    x:0,
    y:0,
    searching:true,
    turn(dir){
        if(dir=='L'){
            this.facing == 'N' ? this.facing = 'W' : this.facing == 'W' ? this.facing = 'S' : this.facing == 'S' ? this.facing = "E" : this.facing = 'N'
        }else{
            this.facing == 'N' ? this.facing = 'E' : this.facing == 'E' ? this.facing = 'S' : this.facing == 'S' ? this.facing = 'W' : this.facing = 'N'
        }
    },
    move(nb){
        let startX = this.x
        let startY = this.y
        switch(this.facing){
            case 'N':
                this.y += nb
                for(let y=startY+1;y<=this.y;y++){
                    let loc = this.x+'-'+y
                    this.searching ? this.partTwo(loc,this.x,y) : undefined
                }
                break
            case 'S':
                this.y -= nb
                for(let y=startY-1;y>=this.y;y--){
                    let loc = this.x+'-'+y
                    this.searching ? this.partTwo(loc,this.x,y) : undefined
                }
                break
            case 'E':
                this.x += nb
                for(let x=startX+1;x<=this.x;x++){
                    let loc = x+'-'+this.y
                    this.searching ? this.partTwo(loc,x,this.y) : undefined
                }
                break
            case 'W':
                this.x -= nb
                for(let x=startX-1;x>=this.x;x--){
                    let loc = x+'-'+this.y
                    this.searching ? this.partTwo(loc,x,this.y) : undefined
                }
                break
        }

    },
    partOne(){
        let dist = Math.abs(this.x)+Math.abs(this.y)
        console.log("Part one = " + dist)
    },
    partTwo(loc,x,y){
        if(places.indexOf(loc)<0){
            places.push(loc)
        }else{
            this.searching = false
            let dist = Math.abs(x)+Math.abs(y)
            console.log('Part two = '+dist)
        }
    }
}

for(let i=0; i<data.length; i++){
    let dir = data[i].substring(0,1)
    let nb = parseInt(data[i].substring(1))
    me.turn(dir)
    me.move(nb)
}

me.partOne()

