class Bishop{

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


        while(row != newValRow && col != newValCol){
        
            row+=rowStep
            col+=colStep

            let currentPoint = row.toString() + col.toString()

            if( currentBoard[currentPoint][0] == this.color){
                return false;
            }



            if(currentBoard[currentPoint][0]!=this.color && currentBoard[currentPoint]!="" && currentBoard[currentPoint] != currentBoard[newVal]){               
                return false
                
            }
            
        }
    
        
       
        if (currentBoard[newVal][0] != this.color && currentBoard[newVal].substring(currentBoard[newVal].length-4)!="King" && Math.abs(newVal[0] - this.currentMove[0]) ===  Math.abs(newVal[1] - this.currentMove[1])){
            return true
        }

        return false
    
    }










}