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

    setColor(color){
        this.color = color
    }

    getColor(){
        return this.color
    }

  

    getAllPossibleMoves(val,currentBoard,needBackground){

        console.log(this.color)


        console.log(val)


        let forwardMove = this.color == "B" ? [1]:[-1] 
        let allMoves = []

        if(val[0] == '1' || val[0] == '6'){
            forwardMove = this.color == "B" ? [1,2]:[-1,-2] 
        }

        console.log(forwardMove)
        console.log(val)

        let row = val[0]
        let col = val[1]



        for(let i=0;i<forwardMove.length;i++){

            let newRow = parseInt(row)+forwardMove[i]
            let newCol = parseInt(col)


            if(currentBoard[newRow.toString() + col.toString()] == ""){
                
                allMoves.push(newRow.toString() + newCol).toString()

                if(needBackground){
                    console.log("++++++++++++++++++")
                    console.log(newRow.toString() + newCol.toString())
                    let cell = document.getElementById(newRow.toString() + newCol.toString())
                    cell.parentNode.style.opacity  = "0.3"
                }
            }

            
        }


        let otherVal = this.color == "B" ? 1:-1

        let movements = [
            [otherVal, otherVal],
            [otherVal, -otherVal],
        ];

       
        for (let i = 0; i < movements.length; i++) {
            let row = parseInt(val[0]) + movements[i][0];
            let col = parseInt(val[1]) + movements[i][1];

            let strRow = row.toString()
            let strCol = col.toString()

            

            if(currentBoard[strRow + strCol] != undefined && currentBoard[strRow + strCol][0] != this.color && currentBoard[strRow + strCol] != "" && currentBoard[strRow + strCol].substring(currentBoard[strRow + strCol].length-4)!="King" ){
                allMoves.push(row.toString() + col.toString())
                if(needBackground){
                    console.log("!!!!!!!!!!!!!!!!!!")
                    console.log(newRow.toString() + newCol.toString())
                    let cell = document.getElementById(row.toString() + col.toString())
                    cell.parentNode.style.opacity  = "0.3"
                }
               

            }
        }

        console.log("pawn",allMoves)    
        return allMoves
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
        
        

        const forwardMove =
            currentBoard[newVal] == "" && 
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
