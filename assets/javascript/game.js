var words = [
  "Apple", "Orange", "Lemon", "Apricot",
  "Avocado", "Banana", "Blueberrie",
  "Cherrie", "Cucumber", "Orange", "Raspberrie", "Grape"
];
var wordChoice = "";
var wordString = [];
var wordLength = 0;
var letterChoice = [];
var wrongChoices = [];
var wins = 0;
var losses = 0;
function startOfGame() {
  wrongChoices = [];
  letterChoice = [];
  guesses = 9;
  wordChoice = words[Math.floor(Math.random() * words.length)].toLowerCase();
  wordString = wordChoice.split("");
  wordLength = wordString.length;
  for (var i = 0; i < wordLength; i++) {
    letterChoice.push("_");
  }
  document.getElementById('clue').innerHTML = letterChoice.join(" ");
  document.getElementById('guesses-left').innerHTML = guesses;
}
function guessCheck(guess) {
  var letterGuess = false;
  for (var i = 0; i < wordLength; i++) {
    if (wordChoice[i] === guess) {
      letterGuess = true;
    }
  }
  if (letterGuess) {
    for (i = 0; i < wordLength; i++) {
      if (wordChoice[i] === guess) {
        letterChoice[i] = guess;
      }
    }
  } else {
    guesses--;
    wrongChoices.push(guess);
  }
}
function game() {
  document.getElementById('clue').innerHTML = letterChoice.join(" ");
  document.getElementById('guesses-left').innerHTML = guesses;
  document.getElementById('wrong-guesses').innerHTML = wrongChoices.join(", ");
  if (wordString.join(" ") === letterChoice.join(" ")) {
    wins++;
    alert(wordChoice + " is correct! You win!!");
    document.getElementById('wins').innerHTML = wins;
    startOfGame();
  } else if (guesses === 0) {
    document.getElementById('losses').innerHTML = losses += 1;
    document.getElementById('wrong-guesses').innerHTML = "";
    alert("The fruit was " + wordChoice + ".  Better luck next time!");
    startOfGame();
  }
}
startOfGame();
document.onkeyup = function (event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  guessCheck(userGuess);
  game();
}