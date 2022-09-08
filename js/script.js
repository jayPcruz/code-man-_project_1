/*----- constants -----*/ '';
// const LETTERS = [
// 	'A',
// 	'B',
// 	'C',
// 	'D',
// 	'E',
// 	'F',
// 	'G',
// 	'H',
// 	'I',
// 	'J',
// 	'K',
// 	'L',
// 	'M',
// 	'N',
// 	'O',
// 	'P',
// 	'Q',
// 	'R',
// 	'S',
// 	'T',
// 	'U',
// 	'V',
// 	'W',
// 	'X',
// 	'Y',
// 	'Z',
// ];

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

/*----- app's state (variables) -----*/
let hiddenWord;

let correctLet = [];

let wrongLet = [];

let correctGuess;

let wrongGuess;

/*----- cached element references -----*/

const resetButton = document.querySelector('#reset');

const codeManImg = document.querySelector('.codeman-img');

const inputBox = document.querySelector('.input-box').value;

/*----- event listeners -----*/

resetButton.addEventListener('click', resetButton)

/*----- functions -----*/


function guessInput() {
    inputBox.addEventListener('click', handleClick)
}

function init() {
    codeManImg.src = CODE_MAN[0]
    hiddenWord = theHiddenWord()
    correctGuess;
    wrongGuess = 0
    correctLet = []
    wrongLet = []
}

function theHiddenWord() {
    const randomInt = Math.floor(Math.random() * HIDDEN_WORDS.length)
    return HIDDEN_WORDS[randomInt]
}

function 