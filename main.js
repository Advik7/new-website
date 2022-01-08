"use strict";
let choices = ["👊", "✋", "✌"];
let playerChoice = "" ;  
let computerChoice;
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let playerPick = document.getElementById('playerPick')
let computerPick = document.getElementById('computerPick')
let resultText = document.getElementById('result')
let playerScore = 0
let computerScore = 0
let state = ""

function randomChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    return randomNumber

}

rock.addEventListener('click', function() {
    playerChoice = "👊"
    gameLogic()
})

paper.addEventListener('click', function() {
    playerChoice = "✋"
    gameLogic()
})

scissors.addEventListener('click', function() {
    playerChoice = "✌"
    gameLogic()
})



function gameLogic() {
    computerChoice = choices[randomChoice()]
    playerPick.textContent = playerChoice
    computerPick.textContent = computerChoice
    if (playerChoice==="👊" && computerChoice ==="✌") {
        state = "You won"
        playerScore += 1
    }else if (playerChoice==="✋" && computerChoice ==="👊") {
        state = "You won"
        playerScore += 1
    }else if (playerChoice==="✌" && computerChoice ==="✋") {
        state = "You won"
        playerScore += 1
    }else if (playerChoice===computerChoice) {
        state = "It's a draw"
    }else {
        console.log("you lost and computer pick " + computerChoice)
        state = "You lost"
        computerScore +=1
    }
    resultText.textContent = state + " and the Score is " + playerScore + "-" + computerScore
}








