
alert("You have 9 guesses to guess what letter I am thinking of! Good luck...");

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;

var losses = 0;
var maxGuesses = 9;
var guessesLeft = maxGuesses;
var guesses = "";



var secNum = Math.floor(Math.random() * letters.length);
console.log(secNum);


	var compGuess = letters[secNum];



	document.onkeyup = function(event){

		var userGuess = event.key;
		if (guessesLeft != maxGuesses) {
		guesses= guesses +  ", " + userGuess;}
		document.getElementById("guesses").innerHTML =  "Your Guesses So Far: " + guesses;


		if (userGuess === compGuess) {

			alert("you win!");
			wins++;
			guessesLeft = maxGuesses;
			guesses = "";
			document.getElementById("wins").innerHTML =  "Wins: " + wins;

			// Print to console.  Ask of quit/play?
		}

		else  {
				guessesLeft--;
				document.getElementById("guesses-left").innerHTML =  "Guesses Left: " + guessesLeft;

			if (guessesLeft < 1) {
				losses++;
				guessesLeft = maxGuesses;
				guesses = "";
				
				document.getElementById("losses").innerHTML =  "Losses: " + losses;


			}}
	};











