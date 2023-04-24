class Bishop extends Pieces{

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


    isValid(newVal,currentBoard){

        console.log("in this")

        let currentRow = parseInt(this.currentMove[0])
        let currentCol = parseInt(this.currentMove[1])

        let newValRow =  parseInt(newVal[0])
        let newValCol =  parseInt(newVal[1])

        let rowStep = (newValRow > currentRow) ? 1 : -1;
        let colStep = (currentCol < newValCol) ? 1 : -1;

        let row = currentRow
        let col = currentCol

        console.log(row)
        console.log(col)

        console.log(newValRow)
        console.log(newValCol)

        console.log(rowStep)
        console.log(colStep)

        console.log(this.color)
        console.log(currentBoard[newVal][0])

        // currentBoard[row.toString() + col.toString()] != "" && 

        while(row != newValRow && col != newValCol){
        
            row+=rowStep
            col+=colStep

            if(currentBoard[row.toString() + col.toString()][0] == this.color){
                console.log("in here")
                return false;
            }

            
        }
    
        
       
        if (currentBoard[newVal][0] != this.color && currentBoard[newVal].substring(currentBoard[newVal].length-4)!="King" && Math.abs(newVal[0] - this.currentMove[0]) ===  Math.abs(newVal[1] - this.currentMove[1])){
            return true
        }

        return false
    
    }










}