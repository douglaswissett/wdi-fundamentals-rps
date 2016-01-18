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

            if(computerMove === 'scissors') {
                winner = 'Player';
            } else {
                winner = 'Computer';
            }
        }

        if(playerMove === 'paper') {

            if(computerMove === 'rock') {
                winner = 'Player';
            } else {
                winner = 'Computer';
            }   
        }

        if(playerMove === 'scissors') {

            if(computerMove === 'paper') {
                winner = 'Player';
            } else {
                winner = 'Computer';
            }
        }
    }
    
    return winner;
}


function playToFive() {
    
/*
    - Play RPS game, first player to five
*/   
    
    var playerWins = 0;
    var computerWins = 0;
    
    while (playerWins < 5 && computerWins < 5) {
        
        
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
playToFive();