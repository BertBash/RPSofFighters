function win(){
    gameCount[0]++;
}

function lose(){
    gameCount[1]++;
}

function tie(){
    return;
}

function rps(c){
    cpu = "paper";

    //Player chose rock
    if(c == "rock"){
        if(cpu == "paper"){
            lose();
        }else if(cpu == "scissors"){
            win();
        }else{
            tie();
        }
    }

    //Player chose paper
    if(c == "paper"){
        if(cpu == "scissors"){
            lose();
        }else if(cpu == "rock"){
            win();
        }else{
            tie();
        }
    }

    //Player chose scissors
    if(c == "scissors"){
        if(cpu == "rock"){
            lose();
        }else if(cpu == "paper"){
            win();
        }else{
            tie();
        }
    }
}

var gameCount = [0,0];
var level = 1;
var score = document.getElementById("score");
document.getElementById("rock").addEventListener("click", rps("rock"));

while(level < 6){
    console.log("Looping!")
    //Listen for a button press, then run RPS on it.
    
    //Play animation

    score.innerText = gameCount[0] + " - " + gameCount[1];
    if(gameCount[0] === 3){
        gameCount = [0,0];
        level++;
        alert("You win!");
        alert("Now, fight a new rival!");
    }else if(gameCount[1] == 3){
        gameCount = [0,0];
        level = 1;
        alert("Go home and be a family man!");
    }
}