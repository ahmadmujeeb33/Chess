class Rook{

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


    getAllPossibleMoves(event,currentBoard){

        let movements = [[1,0],[-1,0],[0,1],[0,-1]]

        let allMoves = []

        for(let i=0;i<movements.length;i++){

            let row = parseInt(event.target.id[0])
            let col = parseInt(event.target.id[1])

            while((currentBoard[(row+movements[i][0]).toString() + (col+movements[i][1]).toString()]!=undefined)){
        
                row+=movements[i][0]
                col+=movements[i][1]
    
                let currentPoint = row.toString() + col.toString()
    
                if(currentBoard[currentPoint][0] != this.color && currentBoard[currentPoint].substring(currentBoard[currentPoint].length-4)!="King"){
                    allMoves.push(currentPoint)

                    let cell = document.getElementById(currentPoint)
                    cell.parentNode.style.opacity  = "0.3"

                }

                else{
                    break
                }
                
            }

        }
        return allMoves
    }
    

    isValid(newVal,currentBoard){


        let currentRow = parseInt(this.currentMove[0])
        let currentCol = parseInt(this.currentMove[1])

        let newValRow =  parseInt(newVal[0])
        let newValCol =  parseInt(newVal[1])

        let colStep = 0
        let rowStep = 0

        

        if(newValRow == currentRow){
            colStep = (currentCol < newValCol) ? 1 : -1;
        }

        else if(newValCol == currentCol){
            rowStep = (newValRow > currentRow) ? 1 : -1;

        }

      
        let row = currentRow + rowStep
        let col = currentCol + colStep

        while(row != newValRow || col != newValCol){
        
            let currentPoint = row.toString() + col.toString()


            if(currentBoard[currentPoint][0] == this.color){
                return false;
            }

            if(currentBoard[currentPoint][0]!=this.color && currentBoard[currentPoint]!="" && currentBoard[currentPoint] != currentBoard[newVal]){               
                return false
                
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