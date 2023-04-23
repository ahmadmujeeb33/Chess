let board = new Board()
board.createBoard()
let startingPosition = board.getStartingPosition()
let pieces

let deletePiece = ()=>{

    let child = document.getElementById(pieces.getCurrentMove());
    console.log(child)
    console.log(child.parentNode)

    let parent = child.parentNode
  
    while(parent.hasChildNodes()){
        parent.removeChild(parent.childNodes[0]);
    }

    startingPosition[pieces.getCurrentMove] = "";

}

let addPiece = ()=>{
    let createImage = document.createElement("img");
    createImage.height = 70;
    createImage.width = 70;
    createImage.src = startingPosition[pieces.getCurrentMove()];

    let separator = "/Assets/";
    let str = startingPosition[pieces.getCurrentMove()]
    let substring = str.substring(str.indexOf(separator)+8, str.length-4);

    createImage.setAttribute("name",substring)


    document.getElementById(pieces.getNewMove()).appendChild(createImage);
    document.getElementById(pieces.getNewMove()).removeAttribute('id')
    createImage.setAttribute("id",pieces.getNewMove())
    startingPosition[pieces.getNewMove()] = startingPosition[pieces.getCurrentMove()];

}

let createPiece = (pieceType) => {
    console.log(pieceType)
    let pieces = {"Pawn":new Pawn()}
    console.log(pieces[pieceType])
    return pieces[pieceType]
}


let Move = (event)=>{

    console.log(event.target)


    if(event.target.name != undefined){
        pieces = createPiece(event.target.name.substring(1,event.target.name.length))
        pieces.setCurrentMove(event.target.id)
        pieces.setColor(event.target.name[0])

    }


    else if(pieces!=undefined && pieces.isValid(event.target.id)){
        pieces.setNewMove(event.target.id)
        addPiece()
        deletePiece()
    }

   
}


const grid = document.querySelectorAll('#board > tr > td');


for(let i = 0; i< grid.length;i++){
    grid[i].addEventListener('click',Move);
};








