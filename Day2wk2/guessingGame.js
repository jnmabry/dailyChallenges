
// Create a variable to hold the answer.
var answer;

// Set up the game.
function setupGame() {

    // Clear our old values.
    $("#tbxGuess").text("");
    $("#message").text("");

    // Come up with the answer.
    answer = parseInt(Math.random() * 10);
    console.log("Cheater! Don't you dare enter " + answer);

    // Hide and show the appropriate divs.
    $("#intro").show();
    $("#game").hide();
    $("#playAgain").hide();
}

// Handle the guess.
function handleGuess() {
    var guess = $("#tbxGuess").val();
    if (+guess == answer) {
        // Tell them the answer is right.
        $("#message").text("You're right!");
        return true;
        // Do you want to play again
    } else {
        // Tell them the answer is wrong.
        $("#message").text("Nope, try again!");
        // Clear old value
        $("#tbxGuess").val("");
        return false;
    }
}

// Set up the page for the game. 
function playGame() {
    $("#intro").hide();
    $("#game").show();
    $("#playAgain").hide();

// Put the focus on the textbox
    $("#tbxGuess").focus();

}


// When the page loads, setup the game.
$(function () {
    // Wire up event handlers.
    $("#startGame").on("click", playGame);
    $("#btnGuess").on("click", handleGuess);

    // Start the game.
    setupGame();
});