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

    

    getColor(){
        return this.color
    }


    getAllPossibleMoves(event,currentBoard){

        let currentMoveRow = parseInt(event.target.id[0])
        let currentMoveCol = parseInt(event.target.id[1])

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

        console.log(movements)
        let allMoves = []

        for (let i = 0; i < movements.length; i++) {
            let row = movements[i][0].toString()
            let col = movements[i][1].toString()
            console.log("row ",row)
            console.log("col ",col)
            if (currentBoard[row + col] != undefined && currentBoard[row + col][0] != this.color) {
                allMoves.push(row+col)
                let cell = document.getElementById(row+col)
                cell.parentNode.style.opacity  = "0.3"

            }
        }

       
        console.log(allMoves)
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