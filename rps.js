function checkgame(){
    if(gameCount[0] === 3){
        gameCount = [0,0];
        alert("You win!");
        alert("Now, fight a new rival!");
    }else if(gameCount[1] == 3){
        gameCount = [0,0];
        level = 0;
        alert("Go home and be a family man!");
    }    
}

function win(){
    console.log("You Win!");
    gameCount[0]++;
    score.innerText = gameCount[0] + " - " + gameCount[1];
    checkgame();
}

function lose(){
    gameCount[1]++;
    score.innerText = gameCount[0] + " - " + gameCount[1];
    wake();
}

function tie(){
    score.innerText = gameCount[0] + " - " + gameCount[1];
    wake();
}

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

function sleep(){
    console.log(flag);
    if(flag){
        setTimeout(sleep, 1000);
    }    
}

function wake(){
    flag = false;
}

var cpu = "scissors";
var flag = true;
var gameCount = [0,0];
var level = 1;
console.log("hi there");
var score = document.getElementById("score");
document.getElementById("rock").addEventListener("click", rock);
document.getElementById("paper").addEventListener("click", paper);
document.getElementById("scissors").addEventListener("click", scissors);

for(let i = 0; i<3; i++){
    console.log("looping")
    //Listen for a button press, then run RPS on it.
    flag = true;
    sleep();

    //Play animation

    if(gameCount[0] === 3){
        gameCount = [0,0];
        alert("You win!");
        alert("Now, fight a new rival!");
    }else if(gameCount[1] == 3){
        gameCount = [0,0];
        level = 0;
        alert("Go home and be a family man!");
    }
    level ++;
}

