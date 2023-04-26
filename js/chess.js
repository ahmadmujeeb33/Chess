let board = new Board()
board.createBoard()
let currentBoard = board.getStartingPosition()
let pieces
let nextColor = "W"
let whiteKingPosition = ""
let blackKingPosition = ""
let previosPiece = ""
let previousHighlighted = []

let check = new Check("04","74",false)



let movePiece = (event)=>{


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


let clearColor = ()=>{

    console.log(previousHighlighted)

    for(cell in previousHighlighted){

        console.log(cell)
        let position = document.getElementById(previousHighlighted[cell])

        console.log(position)

        let rowInt = parseInt(previousHighlighted[cell][0])
        let colInt = parseInt(previousHighlighted[cell][1])

        console.log(rowInt+colInt%2)

        // position.parentNode.style.backgroundColor = (rowInt+colInt)%2==0 ? 'gray' : 'white';  

        position.parentNode.style.opacity  = "1"

    }


}




let Move = (event)=>{

    if(event.target.name != undefined && nextColor == event.target.name[0]){
        clearColor()
        pieces = createPiece(event.target.name.substring(1,event.target.name.length),event.target.id,event.target.name[0])
        previosPiece = event.target.name
        previousHighlighted = pieces.getAllPossibleMoves(event,currentBoard)
     
    }

   

    else if(pieces!=undefined && pieces.isValid(event.target.id,currentBoard) && ((!check.getInCheck() &&  !check.movePieceCausesCheck(pieces.getCurrentMove(),pieces.getColor(),currentBoard)) ||(check.getInCheck() && check.canSaveCheck(event.target.id,previosPiece,pieces.getColor(),currentBoard)))){

        clearColor()
        pieces.setNewMove(event.target.id)
        movePiece(event)

        nextColor = pieces.getColor() == "W"?"B":"W"
        if(currentBoard[event.target.id].substring(1,currentBoard[event.target.id].length) == "King"){
            check.getKingPosition(currentBoard,nextColor)
        }
        
        if(check.isCheck(pieces.getColor(),currentBoard)){
            check.setInCheck(true)
            alert(nextColor + " is Check")
        }
        else{
            check.setInCheck(false)
        }
        pieces = undefined



    }



    

    

   
}


const grid = document.querySelectorAll('#board > tr > td');


for(let i = 0; i< grid.length;i++){
    grid[i].addEventListener('click',Move);
};







