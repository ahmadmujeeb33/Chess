class Queen {
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

        let rook = new Rook(this.currentMove,this.color)
        let allMoves = []
        let rookMoves = rook.getAllPossibleMoves(val,currentBoard,needBackground)


        allMoves.push(...rookMoves)
       
    
        let bishop = new Bishop(this.currentMove,this.color)
        let bishopMoves = bishop.getAllPossibleMoves(val,currentBoard,needBackground)



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