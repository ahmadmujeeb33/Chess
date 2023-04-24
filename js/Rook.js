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


    

    isValid(newVal,currentBoard){

        console.log(newVal)

        let currentRow = parseInt(this.currentMove[0])
        let currentCol = parseInt(this.currentMove[1])

        let newValRow =  parseInt(newVal[0])
        let newValCol =  parseInt(newVal[1])

        let colStep = 0
        let rowStep = 0

        console.log(newValRow)
        console.log(newValCol)


        if(newValRow == currentRow){
            colStep = (currentCol < newValCol) ? 1 : -1;
        }

        else if(newValCol == currentCol){
            rowStep = (newValRow > currentRow) ? 1 : -1;

        }

        console.log(currentRow)
        console.log(currentCol)


        let row = currentRow + rowStep
        let col = currentCol + colStep

        while(row != newValRow || col != newValCol){
        
           

            console.log(row)
            console.log(col)

            if(currentBoard[row.toString() + col.toString()][0] == this.color){
                console.log("in here")
                return false;
            }

            row+=rowStep
            col+=colStep

            
        }
    

        if (currentBoard[newVal][0] != this.color && currentBoard[newVal].substring(currentBoard[newVal].length-4)!="King" && (newVal[0] == this.currentMove[0] || newVal[1] == this.currentMove[1])){
            return true
        }

        return false
    
    }





}