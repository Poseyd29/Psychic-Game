alert("You have 9 guesses to guess what letter I am thinking of! Good luck...");

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;

var losses = 0;

var guesses =0;

var guessesLeft = 9;

var secNum = Math.floor(Math.random() * letters.length);
console.log(secNum);








	var compGuess = letters[secNum];



	document.onkeyup = function(event){

		var userGuess = event.key;

		if (userGuess === compGuess) {

			alert("you win!");
			wins++;
		}

		else if (userGuess !== compGuess) {
				guessesLeft++;

		}

		else if (guessesLeft < 1) {

			losses++;

			alert("you lost...")
		}
	};










