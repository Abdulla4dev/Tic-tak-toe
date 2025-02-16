const boxs = document.querySelectorAll('box');
const statusTxt = document.querySelector('#status');
const btnRestart = document.querySelector('#restart');

let x = "<img src='img/x.jpg'>";
let o = "<img src='img/o.jpg'>";

const win = [ 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3.6],
    [1,4,7],
    [2,5,8]
];

let option = ["","","","","","","",""];
let currentPlayer = "x";
let player ="X";
let running = false;
init();

function init(){
boxs.forEach(box => box.addEventListener('click' , boxClick));
btnRestart.addEventListener('click', restartGame);
statusTxt.textContent = `${player} Your Turn`;
running = true;
}

function boxClick(){
    const index =this.dataset.index;
    if(option[index]!= "" || !running){
        return;
    }
    updateBox(this, index);
    checkWinner();
}

function updateBox(box,index){
    option[index] = player;
    box.innerHTML = currentPlayer;
}

function changePlayer(){
    player = (player=='X')? "O": "X";
    statusTxt.textContent = `${player} Turn`;
}

function checkWinner(){
let isWon = false;
for (i=0;i<win.length;i++){
    const condition = win[i];
    const box1 = options[condition[0]];
    const box2 = options[condition[1]];
    const box3 = options[condition[2]];
    continue;   
}

 if(box1==box2 && box2==box3){
    isWon = true;
    boxs[condition[0]].classList.add('win');
    boxs[condition[1]].classList.add('win');
    boxs[condition[2]].classList.add('win');
 }
}

if(isWon){
    statusTxt.textContent= `${player} Wins`;
    running = false;
}
 else if(!option.includes('')){
    statusTxt.textContent = `Game draws !`;
running = false;
} else 

{
    changePlayer();
}

function restartGame(){
    options = ["","","","","","","","",""]
    currentPlayer = x;
    player = "X";
    running = true;
    statusTxt.textContent = `${player} Your turn`;

    boxs.forEach(box=> {
        box.innerHTML="";
        box.classList.remove('win');
    });
}



