class Knight{


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

    setColor(color){
        this.color = color
    }


    getColor(){
        return this.color
    }


    getAllPossibleMoves(val,currentBoard,needBackground){

        let currentMoveRow = parseInt(val[0])
        let currentMoveCol = parseInt(val[1])

        let movements = [
            [currentMoveRow+1, currentMoveCol+2],
            [currentMoveRow+2, currentMoveCol+1],
            [currentMoveRow+2, currentMoveCol-1],
            [currentMoveRow-1, currentMoveCol+2],

            [currentMoveRow-2, currentMoveCol+1],
            [currentMoveRow+1, currentMoveCol-2],
            [currentMoveRow-2, currentMoveCol-1],
            [currentMoveRow-1, currentMoveCol-2]

        ];

        let allMoves = []

        for (let i = 0; i < movements.length; i++) {
            let row = movements[i][0].toString()
            let col = movements[i][1].toString()
            if (currentBoard[row + col] != undefined && currentBoard[row + col][0] != this.color) {
                allMoves.push(row+col)
                if(needBackground){
                    let cell = document.getElementById(row+col)
                    cell.parentNode.style.opacity  = "0.3"
                }
              

            }
        }

       
        console.log("knight",allMoves)
            return allMoves
    }


    isValid(newVal,currentBoard){

        let currentMoveRow = parseInt(this.currentMove[0])
        let currentMoveCol = parseInt(this.currentMove[1])

        let movements = [
            [currentMoveRow+1, currentMoveCol+2],
            [currentMoveRow+2, currentMoveCol+1],
            [currentMoveRow+2, currentMoveCol-1],
            [currentMoveRow-1, currentMoveCol+2],

            [currentMoveRow-2, currentMoveCol+1],
            [currentMoveRow+1, currentMoveCol-2],
            [currentMoveRow-2, currentMoveCol-1],
            [currentMoveRow-1, currentMoveCol-2]

        ];


        if(currentBoard[newVal][0] != this.color && currentBoard[newVal].substring(currentBoard[newVal].length-4)!="King"){
            for (let i = 0; i < movements.length; i++) {
                if (movements[i][0] === parseInt(newVal[0]) && movements[i][1] === parseInt(newVal[1])) {
                    return true;
                }
            }
            
            
        }



        return false
    
    }






}