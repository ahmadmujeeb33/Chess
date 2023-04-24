class Queen extends Pieces{
    currentMove
    newMove
    color
    nextPlayerTurn


    setCurrentMove(move){
        this.currentMove = move
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

    setColor(color){
        this.color = color
    }

    getColor(){
        return this.color
    }


    isValid(newVal,currentBoard){

        let rook = new Rook()
        rook.setCurrentMove(this.currentMove)
        rook.setColor(this.color)
        

        let bishop = new Bishop()

        bishop.setCurrentMove(this.currentMove)
        bishop.setColor(this.color)


        if(rook.isValid(newVal,currentBoard) || bishop.isValid(newVal,currentBoard)){
            return true
        }
        
        return false

    
    }
}