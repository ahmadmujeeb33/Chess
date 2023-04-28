class King{

    currentMove
    newMove
    color

    constructor(currentMove,color){
        this.currentMove = currentMove
        this.color = color
    }


    getCurrentMove(){
        return this.currentMove
    }

    getNewMove(){
        return this.newMove
    }

    setNewMove(position){
        this.newMove = position
    }


    getColor(){
        return this.color
    }

    setColor(color){
        this.color = color
    }


    getAllPossibleMoves(val,currentBoard,needBackground){



        let movements = [[1,0],[-1,0],[0,1],[0,-1],[1,-1],[1,1],[-1,-1],[-1,1]]

        let allMoves = []

        for(let i=0;i<movements.length;i++){

            let row = parseInt(val[0])
            let col = parseInt(val[1])

           
            let currentPoint = (row + movements[i][0]).toString() + (col + movements[i][1]).toString()

            if(currentBoard[currentPoint]!=undefined && currentBoard[currentPoint][0] != this.color ){
                allMoves.push(currentPoint)

                if(needBackground){
                    let cell = document.getElementById(currentPoint)
                    cell.parentNode.style.opacity  = "0.3"
                }

               

            }

                
            

        }
        return allMoves

    }


    isValid(newVal,currentBoard){


        let currentMoveRow = parseInt(this.currentMove[0])
        let currentMoveCol = parseInt(this.currentMove[1])


        let newValRow =  parseInt(newVal[0])
        let newValCol =  parseInt(newVal[1])

        let check = new Check()
        
        if(currentBoard[newVal][0] != this.color && currentBoard[newVal].substring(currentBoard[newVal].length-4)!="King" && Math.abs(currentMoveRow - newValRow) < 2 && Math.abs(currentMoveCol - newValCol) < 2 && !check.canBeCheck(newVal,this.color,currentBoard)){
          
            return true
        }
        


        return false
    
    }










}