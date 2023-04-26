class Check{

    blackKingPosition
    whiteKingPosition
    inCheck

    constructor(blackKingPosition,whiteKingPosition,inCheck){
        this.blackKingPosition = blackKingPosition
        this.whiteKingPosition = whiteKingPosition
        this.inCheck = inCheck

    }

    setInCheck(inCheck){
        this.inCheck = inCheck
    }

    getInCheck(){
        return this.inCheck
    }


    getKingPosition(currentBoard,nextColor){

        const filteredObj = Object.fromEntries(
            Object.entries(currentBoard).filter(([key, value]) => value.substring(1,value.length) == "King" && value[0] != nextColor)
        );
    
        const val = Object.values(filteredObj)[0];
        const key = Object.keys(filteredObj)[0]
    
        if(val[0] == "B"){
            this.blackKingPosition = key
        }
        
        else{
            this.whiteKingPosition = key
        }
    
    
    }

    showCheck(val,color,currentBoard){


        let kingMove = val
       
        let movements = [ [1,-1],
        [-1,1],
        [1,1],
        [-1,-1],

        [1,0],
        [0,-1],
        [0,1],
        [-1,0],

        ]
        let pieces = new Set([color +"Bishop",color +"Queen"]);



        for(let i=0;i<movements.length;i++){

            let row = parseInt(kingMove[0]) + movements[i][0]
            let col = parseInt(kingMove[1]) + movements[i][1]

            while(currentBoard[row.toString()+col.toString()]!=undefined){

                if(pieces.has(currentBoard[row.toString()+col.toString()])){
                    return true
                    
                }

                if(currentBoard[row.toString()+col.toString()] != ""){
                    break
                }



                row+=movements[i][0]
                col+=movements[i][1]
            }

            if(i==3){
                pieces = new Set([color +"Rook",color +"Queen"]);

            }


        }

        let pawnMove = color == "B" ? [[-1,1],[-1,-1]]:  [[1,1],[1,-1]]

        pieces = new Set([color +"Knight"]);

        movements = [  [1, 2],
            [2, 1],
            [2, -1],
            [-1, 2],

            [-2, 1],
            [1, 2],
            [2, 1],
            [1, 2],
            pawnMove[0],
            pawnMove[1]

        ]
        for(let i=0;i<movements.length;i++){
            let row = parseInt(kingMove[0]) + movements[i][0]
            let col = parseInt(kingMove[1]) + movements[i][1]

           

            if(pieces.has(currentBoard[row.toString()+col.toString()])){      
                return true

            }

            if(i ==7){
                pieces = new Set([color +"Pawn"])
            }
        }





        return false
    }

    canSaveCheck(newVal,previosPiece,color,currentBoard){

        console.log("in save check")

        currentBoard[newVal] = previosPiece
        let kingMove = color == "B" ? this.blackKingPosition : this.whiteKingPosition
        let attackingColor = color == "B"?"W":"B"



        if(this.showCheck(kingMove,attackingColor,currentBoard)){
            currentBoard[newVal] = ""
            alert("You are still in check")
            return true
        }
       
        currentBoard[newVal] = ""
        return false


    }

    movePieceCausesCheck(newVal,color,currentBoard){

        console.log("in here pieces cause")


        let prevVal =  currentBoard[newVal] 
        currentBoard[newVal] = ""
        let kingMove = color == "B" ? this.blackKingPosition : this.whiteKingPosition
        let attackingColor = color == "B"?"W":"B"


        if(this.showCheck(kingMove,attackingColor,currentBoard)){
            currentBoard[newVal] = prevVal
            alert("Can't Make move will lead to check")
            return true
        }
       
        currentBoard[newVal] = prevVal
        return false

    }

    canBeCheck(newVal,color,currentBoard){

        
        let attackingColor = color == "B"?"W":"B"
   
        if(this.showCheck(newVal,attackingColor,currentBoard)){
            alert("Can't Make move will lead to check")
            return true
        }
       
        return false
    }


    isCheck = (color,currentBoard)=>{
        
        let kingMove = color == "W" ? this.blackKingPosition : this.whiteKingPosition

            
        if(this.showCheck(kingMove,color,currentBoard)){
           
            return true
        }

        return false
    
    

    
    }











}