let board = new Board()
board.createBoard()
let startingPosition = board.getStartingPosition()
let pieces
let nextColor = "W"
let pieceMade = false

let deletePiece = ()=>{

    let child = document.getElementById(pieces.getCurrentMove());
    console.log(child)
    console.log(child.parentNode)

    let parent = child.parentNode

    parent.innerHTML = ""
  
    startingPosition[pieces.getCurrentMove] = "";

}

let addPiece = (event)=>{


    let prevId = pieces.getNewMove()

    document.getElementById(pieces.getNewMove()).parentNode.innerHTML = ""

    let createImage = document.createElement("img");
    createImage.height = 70;
    createImage.width = 70;
    createImage.src = "./Assets/" + startingPosition[pieces.getCurrentMove()] +   ".png"
    
    createImage.setAttribute("name",startingPosition[pieces.getCurrentMove()])

   

    event.currentTarget.appendChild(createImage);
    createImage.setAttribute("id",prevId)
    startingPosition[prevId] = startingPosition[pieces.getCurrentMove()];


    let child = document.getElementById(pieces.getCurrentMove());
    
    let parent = child.parentNode

    parent.innerHTML = ""

    startingPosition[pieces.getCurrentMove()] = "";


}

let createPiece = (pieceType) => {
    let pieces = {"Pawn":new Pawn(),"Bishop":new Bishop(),"Rook":new Rook()}
    return pieces[pieceType]
}


let Move = (event)=>{

    console.log(event.target.name)
    console.log(nextColor)


    if(event.target.name != undefined && nextColor == event.target.name[0]){
        console.log("!!!!!!!!!!!!!!!!!")
        pieces = createPiece(event.target.name.substring(1,event.target.name.length))
        pieces.setCurrentMove(event.target.id)
        pieces.setColor(event.target.name[0])

    }


    else if(pieces!=undefined && (pieces.isValid(event.target.id,startingPosition)) || pieces.isAttack(event.target.id,startingPosition)){

        pieces.setNewMove(event.target.id)
        addPiece(event)
        // deletePiece()

        nextColor = pieces.getColor() == "W"?"B":"W"
        console.log(nextColor)
        pieces = undefined


    }



    

    

   
}


const grid = document.querySelectorAll('#board > tr > td');


for(let i = 0; i< grid.length;i++){
    grid[i].addEventListener('click',Move);
};








