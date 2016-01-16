////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move){


if (move !== undefined){

    return move;
}
else {
    return getInput();
}

}

function getComputerMove(move) {


    if (move !== undefined){

    return move;
}
else {
   return randomPlay();
}
    
}

function getWinner(playerMove,computerMove) {
    var winner;

     if(playerMove === computerMove){
        winner = "tie";
        }
    else if(playerMove === "rock"){
        
        if(computerMove === "scissors"){
            winner = "player";
    }
    else {
        winner = "computer";
        }
    }
   else if(playerMove === "scissors"){
        
      if(computerMove === "rock"){
            winner = "computer";
    }
    else {
         winner = "player";
        }
    
    } 
    return winner;
}


function playToFive() {
   var playerWins = 0;
   var computerWins = 0;
      
    var playerMove;
   var computerMove;
   var winner;
    while (playerWins < 5 && computerWins < 5) {
       playerMove = getPlayerMove();
       computerMove = getComputerMove();
       winner = getWinner(playerMove, computerMove);

       if (winner == "player") {
             console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);

           playerWins++;
       }

       else if (winner == "computer") {
             console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);

           computerWins++;
       }
   }
   if (playerWins > computerWins){
        return "Player Won! " + [playerWins, computerWins];
   }
   else {

    return "Computer Won! " + [playerWins, computerWins];
   }
  
}playToFive();





