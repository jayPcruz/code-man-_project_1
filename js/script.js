/*----- constants -----*/ '';
const LETTERS = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
];

const WRONG_GUESS_COUNT = 5;

const HIDDEN_WORDS = [
	'algorithm',
	'code',
	'function',
	'variable',
	'pixel',
	'Boolean',
	'Constants',
	'Declaration',
	'Syntax',
];

const HIDDEN_WORDS_DEF = [
	'The design of products, devices, services, or environments taking into consideration the ability for all users to access, including people who experience disabilities or those who are limited by older or slower technology.',
	'A list of steps to finish a tas',
	'The language that programmers create and use to tell a computer what to do.',
	'A piece of code that you can easily call over and over again.',
	'A placeholder for a piece of information that can change.',
	'Short for "picture element", the fundamental unit of a digital image, typically a tiny square or dot that contains a single point of color of a larger image.',
	'A Boolean expression or Boolean logic is an expression used for creating statements that are either TRUE or FALSE.',
	'A constant (also known as Const) is a term used to describe a value that does not change throughout the execution of the program, unlike a variable.',
	'A statement that describes a variable, function or any other identifier is called a declaration. ',
	'Similar to human languages, programming languages have their own set of rules on how statements can be conveyed. The set of these rules is known as syntax.',
];

//img need to add
const CODE_MAN = ['https://i.imgur.com/DEvJWy4.png'];

const WIN_IMG = [];

const LOSE_IMG = [];

/*----- app's state (variables) -----*/
let hiddenWord;

let correctLet = [];

let wrongLet = [];

let currentGuess;

let currWrongGuess;

let hiddenWordLength;

let goodLetter;

/*----- cached element references -----*/

const resetButton = document.querySelector('#reset');

const codeManImg = document.querySelector('.codeman-img');

const winLoseImg = document.querySelector('winlose-img');

const inputGuess = document.querySelector('display-hidden');

const inputBox = document.querySelector('.the-button'),
	value = inputBox.form.input - inputBox.value;

/*----- event listeners -----*/

resetButton.addEventListener('click', resetCodeMan);

/*----- functions -----*/

function guessInput() {
	inputBox.addEventListener('click', handleClick);
}

function showValueInputBox() {
	LETTERS[0].forEach(function (letter) {
		const blankspace = document.createElement('div');
		blankspace.innterText = letter.toUpperCase();
		blankspace.classList.add('cell');
		//missing something?
	});
}

function handleClick(event) {
	updateCurrentGuess(event.target);
}

function theHiddenWord() {
	const randomInt = Math.floor(Math.random() * HIDDEN_WORDS.length);
	return HIDDEN_WORDS[randomInt];
}

function generateSecretSpots() {
	inputGuess.innerHTML = '';
	hiddenWord.split('').forEach(function () {
		const cell = document.createElement('div');
		cell.classList.add('cell');
		inputGuess.appendChild(cell);
	});
}

function guessCheck() {
	goodLetter = hiddenWord.includes(currentGuess);
}

function updateCurrentGuess(cell) {
	currentGuess = inputBox;
	if (
		correctLet.some((letter) => letter === currentGuess) ||
		wrongLet.some((letter) => letter === currentGuess)
	) {
		return;
	}
	guessCheck();
	dealResults(cell);
	updateCodeManImg();
	winCodeMan();
}

function updateCodeManImg() {
	codeManImg.src = DECAYED_FLOWERS[currWrongGuess];
	loseCodeMan();
}

function dealResults(cell) {
	if (goodLetter === true) {
		cell.style.color = 'green';
		correctLetters.push(currentGuess);
		addResults(currentGuess);
	} else {
		currWrongGuesses += 1;
		cell.style.color = 'red';
		incorrectLetters.push(currentGuess);
	}
}
function addResults(guessedLetter) {
	hiddenWord.split('').forEach((correctLet, idx) => {
		if (correctLet === guessedLetter) {
			inputGuess.childNodes[idx].innerHTML = guessedLetter;
		}
	});
}

function winCodeMan() {
	let hiddenDisplay = true;
	for (let idx = 0; idx < inputGuess.childNodes.length; idx++) {
		if (inputGuess.childNodes[idx].innerText === '') {
			hiddenDisplay = false;
		}
	}
	if (hiddenDisplay === true) {
	}
}

function loseGame() {
	if (currWrongGuess === 5) {
		//incomplete
	}
}

function resetCodeMan() {
	codeManImg.src = CODE_MAN[0];
	hiddenWord = theHiddenWord();
	currWrongGuess = 0;
	currentGuess = '';
	// renderDisplay();
	correctLet = [];
	wrongLet = [];
	generateSecretSpots();
	// document.querySelectorAll('.keyboard .cell').forEach(function (cell) {
	//     cell.style.color = 'white';
}
// }

function init() {
	codeManImg.src = CODE_MAN[0];
	hiddenWord = theHiddenWord();
	currentGuess = '';
	wrongGuess = 0;
	correctLet = [];
	wrongLet = [];
	//incomplete
}
