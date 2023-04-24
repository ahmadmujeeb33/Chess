let board = new Board()
board.createBoard()
let currentBoard = board.getStartingPosition()
let pieces
let nextColor = "W"
let whiteKingPosition = ""
let blackKingPosition = ""

let deletePiece = ()=>{

    let child = document.getElementById(pieces.getCurrentMove());
    console.log(child)
    console.log(child.parentNode)

    let parent = child.parentNode

    parent.innerHTML = ""
  
    currentBoard[pieces.getCurrentMove] = "";

}

let addPiece = (event)=>{


    let prevId = pieces.getNewMove()

    document.getElementById(pieces.getNewMove()).parentNode.innerHTML = ""

    let createImage = document.createElement("img");
    createImage.height = 70;
    createImage.width = 70;
    createImage.src = "./Assets/" + currentBoard[pieces.getCurrentMove()] +   ".png"
    
    createImage.setAttribute("name",currentBoard[pieces.getCurrentMove()])

   

    event.currentTarget.appendChild(createImage);
    createImage.setAttribute("id",prevId)
    currentBoard[prevId] = currentBoard[pieces.getCurrentMove()];


    let child = document.getElementById(pieces.getCurrentMove());
    
    let parent = child.parentNode


    parent.innerHTML = ""


    let tempTag = document.createElement("div")
    tempTag.style.height = "90%"
    tempTag.style.width = "100%"
    tempTag.setAttribute("id",pieces.getCurrentMove())

    parent.append(tempTag)


    currentBoard[pieces.getCurrentMove()] = "";


}

let createPiece = (pieceType,currentMove,color) => {
    let pieces = {"Pawn":new Pawn(currentMove,color)
                , "Bishop":new Bishop(currentMove,color),
                  "Rook":new Rook(currentMove,color),
                  "Knight":new Knight(currentMove,color),
                  "Queen":new Queen(currentMove,color),
                   "King":new King(currentMove,color)}
    return pieces[pieceType]
}


let getKingPosition = ()=>{

    const filteredObj = Object.fromEntries(
        Object.entries(currentBoard).filter(([key, value]) => value.substring(1,value.length) == "King" && value[0] != nextColor)
    );

    const val = Object.values(filteredObj)[0];
    const key = Object.keys(filteredObj)[0]

    if(val[0] == "B"){
        blackKingPosition = key
    }
    
    else{
        whiteKingPosition = key
    }


    console.log(filteredObj)
}

let isCheck = (color)=>{
    let kingMove = color == "W" ? blackKingPosition : whiteKingPosition
    // let diagnoalMovements = [
    //                         [kingMove[0],3,kingMove[1],7]
                        
    //                     ]

    let movements = [ [1,-1],
                      [-1,1],
                      [1,1],
                      [-1,-1]
                    ]

   
    // console.log(currentBoard[row.toString()+col.toString()])

    for(let i=0;i<movements.length;i++){

        let row = parseInt(kingMove[0]) + movements[i][0]
        let col = parseInt(kingMove[1]) + movements[i][1]
    
        while(currentBoard[row.toString()+col.toString()]!=undefined){
       
            let length = currentBoard[row.toString()+col.toString()].length

          

            if(currentBoard[row.toString()+col.toString()].substring(1,length) == "Bishop" || currentBoard[row.toString()+col.toString()].substring(1,length) == "Queen"){
                alert(nextColor + " is Check")
                break
            }

            if(currentBoard[row.toString()+col.toString()].substring(1,length) != ""){
                break
            }

            
    
            row+=movements[i][0]
            col+=movements[i][1]
        }

    }

   




}


let Move = (event)=>{



    if(event.target.name != undefined && nextColor == event.target.name[0]){
        pieces = createPiece(event.target.name.substring(1,event.target.name.length),event.target.id,event.target.name[0])
        

    }


    else if(pieces!=undefined && (pieces.isValid(event.target.id,currentBoard))){

        pieces.setNewMove(event.target.id)
        addPiece(event)
        // deletePiece()

        nextColor = pieces.getColor() == "W"?"B":"W"
        if(currentBoard[event.target.id].substring(1,currentBoard[event.target.id].length) == "King"){
            getKingPosition()
        }
        
        isCheck(pieces.getColor())
        pieces = undefined



    }



    

    

   
}


const grid = document.querySelectorAll('#board > tr > td');


for(let i = 0; i< grid.length;i++){
    grid[i].addEventListener('click',Move);
};



getKingPosition()




