////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {

   var answer = prompt("Please choose either 'rock', 'paper', or 'scissors'.");
   return answer.toLowerCase();
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



function getMax() {

    var max = parseInt(prompt("Play to how many rounds?"));
    return max; 
}

// get user/player move  /  if null, get user input
function getPlayerMove(move) {
    
    return move || getInput();
}


// get computer move  /  if null, generate computer move
function getComputerMove(move) {
    
    return move || randomPlay();
}


function getWinner(playerMove,computerMove) {
    
    /*
        - input playerMove and computerMove
        - compare moves to determine winner
        - return either 'Tie, Player or Computer'
    */
    
    var winner;
    
    if(playerMove === computerMove) {
        
        winner = 'Tie';    
        
    } else {
        
        if (playerMove === 'rock') {

            winner = (computerMove === 'scissors') ? 'Player' : 'Computer';
        }

        if(playerMove === 'paper') {

           winner = (computerMove === 'rock') ? 'Player' : 'Computer';  
        }

        if(playerMove === 'scissors') {

           winner = (computerMove === 'paper') ? 'Player' : 'Computer';
        }
    }
    
    return winner;
}


function playToX() {
    
/*
    - Play RPS game, first player to five
*/   
   
    var max = getMax();
    var playerWins = 0;
    var computerWins = 0;

    
    
    while (playerWins < max && computerWins < max) {
        
        
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove(); 
        var winner = getWinner(playerMove, computerMove);
        
        if (playerMove === null || playerMove.toLowerCase() === 'quit') {
            break;
        } 
        
        console.log('Player chose ' + playerMove + ' to ' + computerMove + '!');
        
        if (winner === 'Tie') {
            playerWins += 0;
            computerWins += 0;
            console.log('It\'s a ' + winner);
        } else {
            if(winner === 'Player') {
                playerWins += 1;
            } else {
                computerWins += 1;
            }
            console.log(winner + ' wins!');
        }
        console.log('The score is player: ' + playerWins + ' to ' + computerWins);
    }
    
    return [playerWins, computerWins];
}

// call game

playToX();