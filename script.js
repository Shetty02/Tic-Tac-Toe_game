console.log('Welcome to Tic Tac Toe');
let turn = 'X'
let gameOver = false;
let draw = 0;

// Function to change the turn
const changeTurn = () =>{
    return turn === "X"?"0":"X"
}

// Fumction to check for a win
const checkWin = () =>{
   let boxtext = document.getElementsByClassName('boxtext');
    let wins =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
   ];

   wins.forEach(e =>{
    if( (boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText)&& (boxtext[e[0]].innerText !== '')   ){
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won"
        gameOver = true;
        turn = "";
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
    }
    else if(draw === 9){
        document.querySelector('.info').innerText = "Tie"
        gameOver = true
    }
    // else {
        //     draw++;
        // }
    })
    // console.log(draw)
//    console.log(draw)
//    if(draw === 72){
//     document.querySelector('.info').innerText = "Tie"
//     gameOver = true
//    }
}


//Game Logic
 let boxes = document.getElementsByClassName('box');
 Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () =>{
        if(boxtext.innerText === ''){
            draw++;
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName('info')[0].innerText = 'Turn for: ' + turn;
            }
        }
        
    })
 });

//  Add onclick listener to reset buttons
reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = ''
    })
    turn = "X";
    document.getElementsByClassName('info')[0].innerText = 'Turn for: ' + turn;    
    draw = 0;
    gameOver = false;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0";

})