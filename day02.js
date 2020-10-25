let fs = require('fs');
let read = fs.readFileSync("day02.txt");
let data = read.toString().split('\n').map(el=>el.split(''))
data.pop()

let digits = [[1,2,3],[4,5,6],[7,8,9]]
let digits2 = [[1],[2,3,4],[5,6,7,8,9],["A","B","C"],["D"]]

let me = {
    x:1,
    y:1,
    code:"",
    code2:"",
    findPos(l){
        switch(l){
            case 'U':
                this.y = this.y == 0 ? this.y : this.y-1
                break
            case 'D':
                this.y = this.y == 2 ? this.y : this.y+1
                break 
            case 'L':
                this.x = this.x == 0 ? this.x : this.x-1
                break
            case 'R':
                this.x = this.x == 2 ? this.x : this.x+1
        }
    },
    getCode(){
        this.code+=digits[this.y][this.x]
    },
    getCode2(){
        this.code2+=digits2[this.y][this.x]
    },
    reset(){
        this.x = 0
        this.y = 2
    },
    partTwo(l){
        switch(l){
            case "U":
                (this.y == 1 && this.x == 1) || this.y == 2 && (this.x == 1 || this.x == 2 || this.x == 3) || this.y == 3 || this. y == 4 ? (this.y--, this.changeX('U')) : undefined
                break
            case "D":
                (this.y == 2 && this.x == 0) || (this.y == 2 && this.x == 4) || this.y == 3 && (this.x==0 || this.x==2) || this.y == 4 ? this.y = this.y : (this.y++, this.changeX('D'))
                break
            case "L":
                this.x = (this.y==1 && this.x == 1) || (this.y==1 && this.x == 2) || this.y == 2 && (this.x == 1 || this.x == 2 || this.x == 3 || this.x == 4) || this.y == 3 && this.x == 1 || this.y == 3 && this.x == 2 ? this.x-1 : this.x
                break
            case "R":
                this.x =  (this.y==1 && this.x == 1) || (this.y==1 && this.x == 0) || this.y == 2 && (this.x == 1 || this.x == 2 || this.x == 3 || this.x == 0) || this.y == 3 && this.x == 1 || this.y == 3 && this.x == 0 ? this.x+1 : this.x
                break
        }

    },
    changeX(l){
        if(l=="U"){
            this.x = this.y == 0  || this.y == 1 && this.x == 1  ? 0 : this.y == 1 && this.x == 2 || this.y == 2 && this.x == 0  || this.y == 3 ? 1 : this.y == 1 && this.x == 3 || this.y == 2 && this.x == 1 ? 2 : this.y == 2 && this.x == 2 ? 3 :  undefined
        }else{
            this.x = this.y == 4 || this.y == 3 && this.x == 1 ? 0 : this.y == 1 && this.x == 0 || this.y == 2 && this.x == 0 || this.y == 3  && this.x == 2 ? 1 : this.y == 2 && this.x == 1 || this.y == 3  && this.x == 3  ? 2 :  this.y == 2 && this.x == 2 ? 3  :undefined
        }
        
    }
}

for(let i=0; i<data.length; i++){
    for(let j=0;j<data[i].length;j++){
        me.findPos(data[i][j])    
    }
    me.getCode()
}
me.reset()
for(let i=0; i<data.length; i++){
    for(let j=0;j<data[i].length;j++){
        me.partTwo(data[i][j])
    }    
    me.getCode2()
}


console.log("Part one " + me.code)
console.log('Part two ' + me.code2)

