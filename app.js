console.log("Tic Tac Toe App");

const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("statusText");
const restartBtn = document.getElementById("restartBtn");

console.log("Cell:", cells);
console.log("Status Text:", statusText);
console.log("Restart Button:", restartBtn);

const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [2,4,6]
];
console.log("Win Conditions:", winConditions);


let options = ["","","","","","","","",""];
let currentPlayer="X"
let running= false;


initalializeGame();

function initalializeGame(){
console.log("Initializing game...");


    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;

}

function cellClicked(){
console.log("Clicking a cell...");


    const cellindex= this.getAttribute("cellIndex");

    if(options[cellindex] != "" || !running){
        return;
    }
    updateCell(this, cellindex);
    checkWinner();
}
 
function updateCell(cell, index){  /// updates the cell with the content by the player.
    options[index]= currentPlayer;
    cell.textContent=currentPlayer;
}

function changePlayer(){
    currentPlayer =(currentPlayer == "X") ? "O" : "X";
    statusText.textContent=`${currentPlayer}'s turn`; /// this will display in h2 and display which players turn it is. 
}

function checkWinner(){  // this will tell if X or O wins by which cell they complete in a row. 
    let roundWon = false;

    for(let i =0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB= options[condition[1]];
        const cellC= options[condition[2]];
        if(cellA =="" || cellB == "" || cellC == "") {
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }
    if (roundWon){ // this will also show in h2/ and show who wins
        statusText.textContent = `${currentPlayer} wins!`
        running = false;
    }
    else if(!options.includes("")){ /// in h2 and declares a draw.
        statusText.textContent=`Draw!`;
        running = true;
    }
    else{
        changePlayer();
    }
}
function restartGame(){ // this tells the game to restart. 
    currentPlayer="X";
    options= ["","","","","","","","",""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "" );
    running = true;
}



























//let p = $('#test');/// all this works
//let div =$('.my-class');
//let ul = $('ul');

//console.log(p);
//console.log(div);
//console.log(ul);

//console.log(p.text());
//p.text('new Text')

//$('input').attr('placeholder', 'placeholder text')// this works

//div.prependTo('<p>prepended paragraph</p>');// 14-17 does not work
//div.append('<p>appended paragraph</p>');
//div.before('<p>paragraph that was added before the div</p>');
//div.after('<p>paragraph added after the div</p>');

// example of ternary operator--- let message = (Weather === "Sunny") ? username + "wear a hat" : username + "wear a coat"

// another way to write the above code is let message = username + (weather === "sunny" ? "wear a hat" : wear a coat)
// another way is let message = username + "wear a" + (weather === "sunny" ? "hat" : "coat")
//rendering// 