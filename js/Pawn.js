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

    clearColor(){

      

        for(let cell=0;cell<this.previousHighlighted.length;cell++){

            let position = document.getElementById(this.previousHighlighted[cell])

            position.parentNode.style.backgroundColor = (parseInt(cell[i])+parseInt(cell[j]))%2==0 ? 'gray' : 'white';  

        }


    }

    getAllPossibleMoves(event,currentBoard){

        let forwardMove = this.color == "B" ? [1]:[-1] 
        let allMoves = []

        if(event.target.id[0] == '1' || event.target.id[0] == '6'){
            forwardMove = this.color == "B" ? [1,2]:[-1,-2] 
        }

        let row = event.target.id[0]
        let col = event.target.id[1]



        for(let i=0;i<forwardMove.length;i++){

            let newRow = parseInt(row)+forwardMove[i]
            let newCol = parseInt(col)

            console.log(newRow)
            console.log(newCol)

            if(currentBoard[newRow.toString() + col.toString()] == ""){
                
                allMoves.push(newRow.toString() + newCol).toString()

                let cell = document.getElementById(newRow.toString() + col)
                cell.parentNode.style.opacity  = "0.3"
            }

            
        }


        let otherVal = this.color == "B" ? 1:-1

        let movements = [
            [otherVal, otherVal],
            [otherVal, -otherVal],
        ];

       
        for (let i = 0; i < movements.length; i++) {
            let row = parseInt(event.target.id[0]) + movements[i][0];
            let col = parseInt(event.target.id[1]) + movements[i][1];

            let strRow = row.toString()
            let strCol = col.toString()

            

            if(currentBoard[strRow + strCol] != undefined && currentBoard[strRow + strCol][0] != this.color && currentBoard[strRow + strCol] != "" && currentBoard[strRow + strCol].substring(currentBoard[strRow + strCol].length-4)!="King" ){
                allMoves.push(row.toString() + col.toString())
                let cell = document.getElementById(row.toString() + col.toString())
                cell.parentNode.style.opacity  = "0.3"

            }
        }
            
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
