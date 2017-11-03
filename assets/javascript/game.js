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

		if (guessesLeft < 1) {

			losses++;

			alert("you lost...")
		}
	};



// Computer generates random number/letter between 1-26 or a-z

	

// Prompt User to guess a random letter between a-z





// Check to see if answer is correct

// If guess is wrong, display the guess on the screen up to 9 guesses

// If guess is correct before the 9 guesses are up add a point to the win column, if not add a point to the loss column

// Prompt message telling User they won






