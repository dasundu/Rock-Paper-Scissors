function getComputerChoice(){
    const option = ["rock" , "paper" , "scissors"];
    let randomChoice = Math.floor(Math.random()* option.length)
    return option[randomChoice]
}


function  getHumanchoice(){
    let option = prompt("enter option(Rock , Paper , Scissors) :");
    return option.toLocaleLowerCase();

}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice , computerChoice){

    if ( humanChoice == computerChoice){
        console.log("TIE")
    }

    else if ( (humanChoice == "rock" && computerChoice == "scissors") ||
            ( humanChoice == "paper" && computerChoice == "rock") ||
            ( humanChoice == "scissors" && computerChoice == "paper"))
            {
            console.log (`YOU WIN! ${humanChoice} beats ${computerChoice} `);
            humanScore++;
            }
    else    {
            console.log (`YOU LOSE! ${computerChoice} beats ${humanChoice} `);
            computerScore++;
        }
    
             
 }
    


function playGame(){

    for(i=0 ; i < 5 ; i++){
    const humanSelection = getHumanchoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection)
    console.log("Round" + (i+1) +" You select :" + humanSelection + " and Computer select " + computerSelection);
    }
}

playGame()
console.log("Human Score =" + humanScore);
console.log("Computer Score =" + computerScore);