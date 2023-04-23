class Pawn extends Pieces{

    currentMove
    newMove
    color


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

    isValid(val){
       
        let valToCheck = this.color == "B" ? '1':'6'
        let otherVal = this.color == "B" ? -1:1

        console.log(this.color)
        console.log(valToCheck)
        console.log(otherVal)

        console.log(this.currentMove[0])
        console.log(val[0])
       
        if(parseInt(this.currentMove[0]) == parseInt(val[0])+otherVal && parseInt(this.currentMove[1]) == parseInt(val[1])){
            return true
        }
        
        if(this.currentMove[0] == valToCheck && (parseInt(this.currentMove[0]) == parseInt(val[0])+otherVal + otherVal) && parseInt(this.currentMove[1]) == parseInt(val[1])){
            return true;
            
              
        }


        return false;
    
    }


}
