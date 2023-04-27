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

   


    isValid(newVal,currentBoard){

        console.log("in this")

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