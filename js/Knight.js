class Knight{


    currentMove
    newMove
    color

    constructor(currentMove,color){
        this.currentMove = currentMove
        this.color = color
    }

   

    getCurrentMove(){
        console.log("thissssssssssssss")
        return this.currentMove
    }

    getNewMove(){
        return this.newMove
    }

    setNewMove(position){
        console.log("in this",position)
        this.newMove = position
    }

    

    getColor(){
        return this.color
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