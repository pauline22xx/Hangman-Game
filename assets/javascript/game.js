// Creating a giant hangmanGame object that will house all of our logic and variables.
var hangmanGame = {
	listOfWords = ["pizza", "tacos", "fries", "pasta"]

	function chooseWord(listOfWords) {
		currentWord = listOfWords[Math.floor(Math.random() * listOfWords.length)];
		return currentWord;
	}

	function setupGame() {
		currentWord = chooseWord(listOfWords);
		availableLetters = "abcdefghijklmnopqrstuvwxyz";
		guessesLeft = 5;

		chooseWord = document.getElementById("game-board");  	
	} 


}
  

  // Object of all words that can be chosen, along with info such as their picture and a song clip.

  // Variables that set the initial state of our hangman game.
  // initialState = {
	 //  wordInPlay: null,
	 //  lettersOfTheWord: [],
	 //  matchedLetters: [],
	 //  guessedLetters: [],
	 //  guessesLeft: 0,
	 //  totalGuesses: 0,
	 //  letterGuessed: null,
	 //  wins: 0,
  // }
  


  
 
  


 