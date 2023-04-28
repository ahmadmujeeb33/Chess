class Bishop{

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

    setColor(color){
        this.color = color
    }


    getAllPossibleMoves(val,currentBoard,needBackground){

        let movements = [[1,1],[1,-1],[-1,1],[-1,-1]]

        let allMoves = []


        for(let i=0;i<movements.length;i++){

            let row = parseInt(val[0])
            let col = parseInt(val[1])

            while((currentBoard[(row+movements[i][0]).toString() + (col+movements[i][1]).toString()]!=undefined)){
        
                row+=movements[i][0]
                col+=movements[i][1]
    
                let currentPoint = row.toString() + col.toString()

                if(currentBoard[currentPoint][0] != this.color && currentBoard[currentPoint] != ""){
                    allMoves.push(currentPoint)
                    if(needBackground){
                        let cell = document.getElementById(currentPoint)
                        cell.parentNode.style.opacity  = "0.3"
                    }
                  
                    break
                }
    
                else if(currentBoard[currentPoint][0] != this.color && currentBoard[currentPoint].substring(currentBoard[currentPoint].length-4)!="King"){
                    allMoves.push(currentPoint)

                    if(needBackground){
                        let cell = document.getElementById(currentPoint)
                        cell.parentNode.style.opacity  = "0.3"
                    }
                   

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