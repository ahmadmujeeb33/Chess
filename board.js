const createBoard = ()=>{
    let size = 8
    let board = document.getElementById("board");
    let startingPosition = {"00":"./Assets/BRook.png","01":"./Assets/BKnight.png"
                            ,"02":"./Assets/BBishop.png","03":"./Assets/BQueen.png"
                            ,"04":"./Assets/BKing.png","05":"./Assets/BBishop.png"
                            ,"06":"./Assets/BKnight.png","07":"./Assets/BRook.png",
                            "10":"./Assets/BPawn.png","11":"./Assets/BPawn.png"
                            ,"12":"./Assets/BPawn.png","13":"./Assets/BPawn.png"
                            ,"14":"./Assets/BPawn.png","15":"./Assets/BPawn.png",
                            "16":"./Assets/BPawn.png","17":"./Assets/BPawn.png",
                            "70":"./Assets/WRook.png","71":"./Assets/WKnight.png"
                            ,"72":"./Assets/WBishop.png","73":"./Assets/WQueen.png"
                            ,"74":"./Assets/WKing.png","75":"./Assets/WBishop.png"
                            ,"76":"./Assets/WKnight.png","77":"./Assets/WRook.png",
                            "60":"./Assets/WPawn.png","61":"./Assets/WPawn.png"
                            ,"62":"./Assets/WPawn.png","63":"./Assets/WPawn.png"
                            ,"64":"./Assets/WPawn.png","65":"./Assets/WPawn.png",
                            "66":"./Assets/WPawn.png","67":"./Assets/WPawn.png"}
    for(let i=0;i<size;i++){
        let row = document.createElement('tr')
        for(let j=0;j<size;j++){
            let cell = document.createElement('td');
            if(startingPosition.hasOwnProperty(i.toString() + j.toString())){
                var img = document.createElement("img");
                img.height = 70;
                img.width = 70;
                img.src = startingPosition[i.toString() + j.toString()]
                cell.append(img)
            }
           
            cell.classList.add('cellSize')
            cell.style.backgroundColor = (i+j)%2==0 ? 'gray' : 'white';  
            row.append(cell)


        }
             
        board.append(row)


    }
    

}













createBoard()