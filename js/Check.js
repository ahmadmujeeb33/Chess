class Check{

    blackKingPosition
    whiteKingPosition



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
    
    
        console.log(filteredObj)
    }

    checkForCheck(val,color){

        console.log(val)

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

            console.log(kingMove)
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

            console.log("row",row)
            console.log("col",col)

            if(pieces.has(currentBoard[row.toString()+col.toString()])){      
                return true

            }

            if(i ==7){
                pieces = new Set([color +"Pawn"])
            }
        }





        return false
    }


    canBeCheck(newVal,color){


        let attackingColor = color == "B"?"W":"B"
   
        if(this.checkForCheck(newVal,attackingColor)){
            alert("Can't Make move will lead to check")
            return true
        }
       
        return false
    }


    isCheck = (color)=>{
        
        let kingMove = color == "W" ? this.blackKingPosition : this.whiteKingPosition

        console.log(kingMove)
            
        if(this.checkForCheck(kingMove,color)){
           
            return true
        }

        return false
    
    

    
    }











}