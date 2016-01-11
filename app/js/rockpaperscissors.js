////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    search = prompt("Please choose either 'rock', 'paper', or 'scissors'. To exit type 'quit'.")
    return search;
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

var search;
var playerMove;
var computerMove;
var winner;
var playerWins = 0;
var computerWins = 0;


// get user/player move  /  if null, input user/player move
function getPlayerMove(move) {
    
    playerMove = move || getInput();
    return playerMove;
}


// get computer move  /  if null, generate computer move
function getComputerMove(move) {
    
    computerMove = move || randomPlay();
    return computerMove;
}


function getWinner(playerMove,computerMove) {
    
    /*
        - input playerMove and computerMove
        - compare moves to determine winner
        - return either 'Tie, Player or Computer'
    */
    
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
    console.log('Lets play rock, paper, scissors!');
    
    while (playerWins < 5 && computerWins < 5) {
        
        getInput();
        
        if (search == null || search.toLowerCase() == 'quit') {
            break;
        } 

        getWinner(getPlayerMove(search), getComputerMove(randomPlay()));
        
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
        console.log('The score is ' + playerWins + ' to ' + computerWins);
    }
}

// call game
playToFive();