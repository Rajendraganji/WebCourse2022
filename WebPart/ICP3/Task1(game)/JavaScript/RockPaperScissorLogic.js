
$(function() {
    $("button").click(function () {

        let playeroneChoice = $(this).attr('id');
        show(playeroneChoice);

    });
})


function show(playeroneChoice) {
    // lets gererate random number 
    let randomChoice = Math.random();
    // declaring empty player2 choice to assign a random choice
    let playertwoChoice='';
    
    // Added Conditional statements to assign a choice to the player2 based on the random number generated
    if (randomChoice<0.45)
        playertwoChoice='rock';
    else if (randomChoice<0.80)
        playertwoChoice='paper';
    else
        playertwoChoice='scissors';


    // if else conditions to decide who have won the game

    if (playeroneChoice === playertwoChoice)
        document.getElementById("output").innerHTML =  "your opponent picked the same. It's a tie";

    else if (playeroneChoice == "rock") {
        if (playertwoChoice == "scissors")
            document.getElementById("output").innerHTML =  "Your opponent had scissors. you have won the game!!!" ;
        else
            document.getElementById("output").innerHTML =  "Your opponent had Papers. You have lost the game";
    }
    else if (playeroneChoice == "paper") {
        if (playertwoChoice == "rock")
            document.getElementById("output").innerHTML =  "Your opponent had rock. you have won the game";
        else
            document.getElementById("output").innerHTML =  "Your opponent had scissors. You have lost the game";
    }
    else if (playeroneChoice == "scissors") {
        if (playertwoChoice == "paper")
            document.getElementById("output").innerHTML =  "Your opponent had paper. you have won the game";
        else
            document.getElementById("output").innerHTML =  "Your opponent had rock. You have lost the game";
    }
}
