class Queen {
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

    getAllPossibleMoves(event,currentBoard){

        let rook = new Rook(this.currentMove,this.color)
        let allMoves = []
        let rookMoves = rook.getAllPossibleMoves(event,currentBoard)

        console.log(rookMoves)

        allMoves.push(...rookMoves)
       
    
        let bishop = new Bishop(this.currentMove,this.color)
        let bishopMoves = bishop.getAllPossibleMoves(event,currentBoard)



        allMoves.push(...bishopMoves)

        
        return allMoves
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