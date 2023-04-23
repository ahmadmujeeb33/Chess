class Rook extends Pieces{

    currentMove
    newMove
    color
    nextPlayerTurn


    setCurrentMove(move){
        this.currentMove = move
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


    isAttack(newVal,currentBoard){
        if(currentBoard[newVal][0] != this.color && currentBoard[newVal].substring(currentBoard[newVal].length-4)!="King" && (newVal[0] == this.currentMove[0] || newVal[1] == this.currentMove[1])){
            return true
        }

        return false
    }
    

    isValid(newVal,currentBoard){
        if (currentBoard[newVal]=="" && (newVal[0] == this.currentMove[0] || newVal[1] == this.currentMove[1])){
            return true
        }

        return false
    
    }





}