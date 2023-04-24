class Queen {
    currentMove
    newMove
    color
    nextPlayerTurn

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

        let rook = new Rook(this.currentMove,this.color)
       
    
        let bishop = new Bishop(this.currentMove,this.color)



        if(rook.isValid(newVal,currentBoard) || bishop.isValid(newVal,currentBoard)){
            return true
        }
        
        return false

    
    }
}