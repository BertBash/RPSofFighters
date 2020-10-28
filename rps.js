function changeLevel(){
    if(level < 5){
        level++;
        lev.innerText = name + " vs " + opponents[level-1];
        opponent.innerHTML = '<img src="./assets/visual/' + opponents[level-1] +  '.gif" alt="Idle animation of the opposing character">';
    }else{
        level = 1;
        lev.innerText = name + " vs " + opponents[level-1];        
        opponent.innerHTML = '<img src="./assets/visual/' + opponents[level-1] +  '.gif" alt="Idle animation of the opposing character">';
    }
}

function checkgame(){
    if(gameCount[0] === 3){
        gameCount = [0,0];
        changeLevel();
    }else if(gameCount[1] == 3){
        gameCount = [0,0];
        level = 100;
        changeLevel();
    }
    result.innerText = "Opponent chose " + cpu +"!";    
    score.innerText = gameCount[0] + " - " + gameCount[1];
    cpuMove();
}

function cpuMove(){
    let c = Math.floor((Math.random() * 3));
    let choices = ["rock", "paper", "scissors"];
    cpu = choices[c];
}

//Result Functions
function win(){
    gameCount[0]++;
    checkgame();
    result.innerText = result.textContent + " you win!";
}

function lose(){
    gameCount[1]++;
    checkgame();
    result.innerText = result.textContent + " you lose!";
}

function tie(){
    score.innerText = gameCount[0] + " - " + gameCount[1];
    result.innerText = "Opponent chose " + cpu +"!";    
    cpuMove();
    result.innerText = result.textContent + " draw game!";
}

//Button Functions
function rock(){
    console.log("In Rock!");

    //Player chose rock
    if(cpu === "paper"){
        lose();
    }else if(cpu === "scissors"){
        win();
    }else{
        tie();
    }
}

function paper(){
    //Player chose paper
    if(cpu == "scissors"){
        lose();
    }else if(cpu == "rock"){
        win();
    }else{
        tie();
    }
}

function scissors(){
    //Player chose scissors
    if(cpu == "rock"){
        lose();
    }else if(cpu == "paper"){
        win();
    }else{
        tie();
    }
}

//Name Functions
function setName(){
    name = document.getElementById("name").value;
    lev.innerText = name + " vs " + opponents[level-1];
}

//Variables
var cpu;
var gameCount = [0,0];
var level = 1;
var opponents = ["lucky", "terry", "leona", "iori", "rugal"];
var name = "?????";

//Element variables
var score = document.getElementById("score");
var lev = document.getElementById("level");
var opponent = document.getElementById("opponent");
var result = document.getElementById("result");

//Event Listeners for buttons
document.getElementById("rock").addEventListener("click", rock);
document.getElementById("paper").addEventListener("click", paper);
document.getElementById("scissors").addEventListener("click", scissors);
document.getElementById("nameSelect").addEventListener("click", setName);

//Initialize CPU Choice
cpuMove();