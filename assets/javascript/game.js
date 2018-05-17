// Alphabet Psychic Game

var alphaBet = ("abcdefghijklmnopqrstuvwxyz").split("");

var wins = 0;
var losses = 0;
var guesses = [];

document.onkeyup = function(event) {
    var userGuess = event.key;
    var aiKey = alphaBet[Math.floor(Math.random() * alphaBet.length)];
    var wrong = (userGuess !== aiKey);

    if (userGuess === aiKey) {
        alert("You're a psychic!!");
        wins++;
    } else {
        alert("Your key was either wrong or was not a letter. Please try again.");
        losses++;
    }

    if (userGuess !== aiKey) {
        guesses.push(String(" " + userGuess));
    } else {
        guesses = [];
    }

    var html =
        "<p>Your key: " + userGuess + "</p>" +
        "<p>AI key: " + aiKey + "</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses: " + guesses + "</p>";

    document.querySelector("#game").innerHTML = html;
};