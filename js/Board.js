
class Board{

    // ./Assets/
    // .png

    getStartingPosition(){
        return {"00":"BRook","01":"BKnight"
        ,"02":"BBishop","03":"BQueen"
        ,"04":"BKing","05":"BBishop"
        ,"06":"BKnight","07":"BRook",
        "10":"BPawn","11":"BPawn"
        ,"12":"BPawn","13":"BPawn"
        ,"14":"BPawn","15":"BPawn",
        "16":"BPawn","17":"BPawn",
        "20":"","21":"","22":"","23":"","24":"","25":"","26":"","27":"",
        "30":"","31":"","32":"","33":"","34":"","35":"","36":"","37":"",
        "40":"","41":"","42":"","43":"","44":"","45":"","46":"","47":"",
        "50":"","51":"","52":"","53":"","54":"","55":"","56":"","57":"",
        "60":"","61":"","62":"","63":"","64":"","65":"","66":"","67":"",
        "70":"WRook","71":"WKnight"
        ,"72":"WBishop","73":"WQueen"
        ,"74":"WKing","75":"WBishop"
        ,"76":"WKnight","77":"WRook",
        "60":"WPawn","61":"WPawn"
        ,"62":"WPawn","63":"WPawn"
        ,"64":"WPawn","65":"WPawn",
        "66":"WPawn","67":"WPawn"}
    }

    createBoard(){
        let startingPosition = this.getStartingPosition()
        let size = 8
        let board = document.getElementById("board");
        
        for(let i=0;i<size;i++){
            let row = document.createElement('tr')
            for(let j=0;j<size;j++){
                let cell = document.createElement('td');
                if(startingPosition[i.toString() + j.toString()]!=""){
                    var img = document.createElement("img");
                    img.height = 70;
                    img.width = 70;
                    img.src = "./Assets/" + startingPosition[i.toString() + j.toString()] +   ".png"
                    img.setAttribute("id",i.toString() + j.toString())

                    img.setAttribute("name",startingPosition[i.toString() + j.toString()])
                    cell.append(img)
                }
                else{
                    let tempTag = document.createElement("div")
                    // tempTag.style.height = "8vh"
                    tempTag.style.height = "100%"
                    tempTag.style.width = "100%"
                    tempTag.setAttribute("id",i.toString() + j.toString())

                    cell.append(tempTag)
                    
                    // cell.setAttribute("id",i.toString() + j.toString())

                }
               
                cell.classList.add('cellSize')
                cell.style.backgroundColor = (i+j)%2==0 ? 'gray' : 'white';  
                row.append(cell)
    
    
            }
                 
            board.append(row)
    
    
        }

    }
}


// const createBoard = ()=>{
//     let size = 8
//     let board = document.getElementById("board");
    
//     for(let i=0;i<size;i++){
//         let row = document.createElement('tr')
//         for(let j=0;j<size;j++){
//             let cell = document.createElement('td');
//             if(startingPosition.hasOwnProperty(i.toString() + j.toString())){
//                 var img = document.createElement("img");
//                 img.height = 70;
//                 img.width = 70;
//                 img.src = startingPosition[i.toString() + j.toString()]
//                 cell.append(img)
//             }
           
//             cell.classList.add('cellSize')
//             cell.style.backgroundColor = (i+j)%2==0 ? 'gray' : 'white';  
//             row.append(cell)


//         }
             
//         board.append(row)


//     }
    

// }






// createBoard()
