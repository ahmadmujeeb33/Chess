class Pawn{

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
    

    isAttack(newVal,currentBoard){


        let otherVal = this.color == "B" ? -1:1

        let movements = [
            [otherVal, otherVal],
            [otherVal, -otherVal],
        ];

        if(currentBoard[newVal][0] != this.color && currentBoard[newVal] != "" && currentBoard[newVal].substring(currentBoard[newVal].length-4)!="King" ){
            for (let i = 0; i < movements.length; i++) {
                let row = parseInt(newVal[0]) + movements[i][0];
                let col = parseInt(newVal[1]) + movements[i][1];
                if (row === parseInt(this.currentMove[0]) && col === parseInt(this.currentMove[1])) {
                    return true;
                }
            }
            
            
        }

        return false
    }

    

    isValid(newVal,currentBoard){

        let otherVal = this.color == "B" ? -1:1       
        let valToCheck = this.color == "B" ? '1':'6'
        
        // if(currentBoard[newVal]==""){
            

        const forwardMove =
            parseInt(this.currentMove[0]) === parseInt(newVal[0]) + otherVal &&
            parseInt(this.currentMove[1]) === parseInt(newVal[1]);

    
        const starterForwardMove =
            this.currentMove[0] === valToCheck &&
            parseInt(this.currentMove[0]) === parseInt(newVal[0]) + otherVal * 2 &&
            parseInt(this.currentMove[1])=== parseInt(newVal[1]);

        if(forwardMove || starterForwardMove){
            return true
        }
           
        // }

        if(this.isAttack(newVal,currentBoard)){
            return true
        }
    

        return false;
    
    }


}
