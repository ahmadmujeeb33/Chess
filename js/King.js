class King{

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

    // canBeCheck(newVal){

    //     console.log("in this ", this.color)

    //     let kingMove = newVal

    //     let attackingColor = this.color == "B"?"W":"B"
   
             
    //     let movements = [ [1,-1],
    //                     [-1,1],
    //                     [1,1],
    //                     [-1,-1],

    //                     [1,0],
    //                     [0,-1],
    //                     [0,1],
    //                     [-1,0],

    //                 ]
    //     let pieces = new Set([attackingColor +"Bishop",attackingColor +"Queen"]);
        
    

    //     for(let i=0;i<movements.length;i++){

    //         let row = parseInt(kingMove[0]) + movements[i][0]
    //         let col = parseInt(kingMove[1]) + movements[i][1]
        
    //         while(currentBoard[row.toString()+col.toString()]!=undefined){
        
    //             if(pieces.has(currentBoard[row.toString()+col.toString()])){
    //                 alert("Can't Make move will lead to check")
    //                 return true
                    
    //             }

    //             if(currentBoard[row.toString()+col.toString()] != ""){
    //                 break
    //             }

                
        
    //             row+=movements[i][0]
    //             col+=movements[i][1]
    //         }

    //         if(i==3){
    //             pieces = new Set([attackingColor +"Rook",attackingColor +"Queen"]);
                
    //         }


    //     }

    //     let pawnMove = attackingColor == "B" ? [[-1,1],[-1,-1]]:  [[1,1],[1,-1]]

    //     pieces = new Set([attackingColor +"Knight"]);

    //     movements = [  [1, 2],
    //                 [2, 1],
    //                 [2, -1],
    //                 [-1, 2],

    //                 [-2, 1],
    //                 [1, 2],
    //                 [2, 1],
    //                 [1, 2],
    //                 pawnMove[0],
    //                 pawnMove[1]
                
    //             ]
    //     for(let i=0;i<movements.length;i++){
    //         let row = parseInt(kingMove[0]) + movements[i][0]
    //         let col = parseInt(kingMove[1]) + movements[i][1]

    //         console.log("row",row)
    //         console.log("col",col)

    //         if(pieces.has(currentBoard[row.toString()+col.toString()])){      
    //             alert("Can't Make move will lead to check")
    //             return true
                
    //         }

    //         if(i ==7){
    //             pieces = new Set([attackingColor +"Pawn"])
    //         }
    //     }





    //     return false

    // }


    isValid(newVal,currentBoard){

        console.log("in this")

        let currentMoveRow = parseInt(this.currentMove[0])
        let currentMoveCol = parseInt(this.currentMove[1])


        let newValRow =  parseInt(newVal[0])
        let newValCol =  parseInt(newVal[1])

        let check = new Check()
        
        if(currentBoard[newVal][0] != this.color && currentBoard[newVal].substring(currentBoard[newVal].length-4)!="King" && Math.abs(currentMoveRow - newValRow) < 2 && Math.abs(currentMoveCol - newValCol) < 2 && !check.canBeCheck(newVal,this.color,currentBoard)){
          
            return true
        }
        


        return false
    
    }










}