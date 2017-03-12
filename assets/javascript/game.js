// Creating a giant hangmanGame object that will house all of our logic and variables.
var hangmanGame = 
	wordInPlay = ["pizza", "tacos", "fries", "pasta"]

	metallica: {
      picture: "metallica.jpg",
      song: "Master of Puppets",
      preview: "https://p.scdn.co/mp3-preview/60e6f8dab43f176dd9fb5e795d4e6459bad52e9e"
    },

      wordInPlay: null,
	  lettersOfTheWord: [],
	  matchedLetters: [],
	  guessedLetters: [],
	  guessesLeft: 0,
	  totalGuesses: 0,
	  letterGuessed: null,
	  wins: 0,

	function chooseWord(wordInPlay) {
		currentWord =wordInPlay[Math.floor(Math.random() * wordInPlay.length)];
		return currentWord;
	}

	setupGame: function() {
		currentWord = chooseWord(wordInPlay);
		availableLetters = "abcdefghijklmnopqrstuvwxyz";
		guessesLeft = 5;

		chooseWord = document.getElementById("game-board");  	
	} 
	updatePage: function(letter) {

	}

	updateGuesses: function(letter){

	}

	processUpdateTotalGuesses: function() {

	}

	updateMatchedLetters: function(letter) {
	
	}
	rebuildWordView: function() {
		var wordView = "";
	for 
		if (true) {

		} 
		else {

		}
	},

	restartGame: function() {
		add this.wordInPlay = null
		this.setupGame();
		this.rebuildWordView();
	},

	updateWins: function() {

	},



	hangmanGame.setupGame();


	document.onkeyup = function(event) {

		hangmanGame.letterGuessed = String.fromCharCode (event.keyCode).toLowerCase();

		hangmanGame.updatePage(hangmanGame.letterGuessed);
	};



// function resetGame () {
//     resetUI();
//     gameAnswer = chooseWord();
//     gameShownAnswer = blanksFromAnswer(gameAnswer);
//     hangmanState = 0;
//     drawWord(gameShownAnswer);    
// }
// $(document).ready(resetGame);
// function win () { alert('You win!');  resetGame() ;}
// function lose () { alert('Oh no, you lose!'); resetGame(); }
// function doKeypress () {
//     var tempChar = $('#letter-input').val().toLowerCase();
//     var tempString = "";
//     $('#letter-input').val("");
    
//     // Write here!
//     tempString = guessLetter( tempChar, gameShownAnswer, gameAnswer );
//     if ( tempString != gameShownAnswer ) {
//         updateWord( tempString );
//         gameShownAnswer = tempString;
//         if ( gameShownAnswer === gameAnswer ) {
//             win();
//         }
//     } else {
//         wrongLetter(tempChar);
//         drawSequence[ hangmanState++ ]();
//         if ( hangmanState === drawSequence.length ) {
//             lose();
//         }
//     }  
// }
// $('#letter-input').keyup( doKeypress );

// function blanksFromAnswer ( answerWord ) {  
//     var result = ""; 
//     for ( i in answerWord ) {
//         result = "_" + result;
//     }
//     return result;
// }
// function alterAt ( n, c, originalString ) {
//     return originalString.substr(0,n) + c + originalString.substr(n+1,originalString.length);
// }
// function guessLetter( letter, shown, answer ) {
//     var checkIndex = 0;
    
//     checkIndex = answer.indexOf(letter);
//     while ( checkIndex >= 0 ) {
//         shown = alterAt( checkIndex, letter, shown );
//         checkIndex = answer.indexOf(letter, checkIndex + 1);
//     }
//     return shown;
// }

// function drawHead () {
//   $('.draw-area').append( $('<div/>').addClass("body-part head") );
// }
// function drawTorso () {
//   $('.draw-area').append(
//       $('<div/>').addClass("body-part armbox").append(
//           $('<div/>').addClass("body-part torso")));
//   $('.draw-area').append(
//       $('<div/>').addClass("body-part legbox").append(
//           $('<div/>').addClass("body-part pelvis")));
// }
// function drawLeftArm () {
//  $('.armbox').prepend( $('<div/>').addClass("body-part leftarm") );
// }
// function drawRightArm () {
//  $('.armbox').prepend( $('<div/>').addClass("body-part rightarm") );   
// }
// function drawLeftLeg () {
//  $('.legbox').prepend( $('<div/>').addClass("body-part leftleg") );   
// }
// function drawRightLeg() {
//  $('.legbox').prepend( $('<div/>').addClass("body-part rightleg") );   
// }
// var drawSequence = [ drawHead,drawTorso,drawLeftArm,drawRightArm,drawLeftLeg,drawRightLeg ];
// function wrongLetter ( letter ) {
//     $('#wrong-letters').append(
//         $('<span/>').addClass('guessed-letter').text(letter));
// }
// function resetUI () {
//     $('.body-part').remove();
//     $('.guessed-letter').remove();
//     $('.shown-letter').remove();
// }
// function drawWord( answer ) {
//     for ( i in answer ) {
// 	$('.word-display').append(
// 	    $('<span/>').addClass('shown-letter').html('&nbsp;'));
//     }
// }
// function updateWord( answer ) {
//     $k = $('.shown-letter:first');
//     for ( i in answer ) {
// 	if ( answer.charAt(i) != '_' ) {
// 	    $k.text( answer.charAt(i) );
// 	} else { 
// 	    $k.html('&nbsp;');
// 	}
// 	$k = $k.next();
//     }
// }

  

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
  


  
 
  


 