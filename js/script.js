//constants
//
//
const WRONG_GUESS_COUNT = 5;
const HIDDEN_WORDS = ['ALGORITHM', 'CODE', 'FUNCTION', 'VARIABLE'];
const HIDDEN_WORDS_DEF = [
	'The design of products, devices, services, or environments taking into consideration the ability for all users to access, including people who experience disabilities or those who are limited by older or slower technology.',
	'A list of steps to finish a tas',
	'The language that programmers create and use to tell a computer what to do.',
	'A piece of code that you can easily call over and over again.',
];
const CODE_MAN = [
	'images/IMG_1.PNG',
	'images/IMG_2.PNG',
	'images/IMG_3.PNG',
	'images/IMG_4.PNG',
	'images/IMG_5.PNG',
];

//
//
//

//app state variables

let randomWord;
let wrongLetterTracker = [];
let correctLetterTracker = [];
let currentGuess;
let numberOfWrongChoices;

//
//
//

//cached element refrence

const imgEl = document.querySelector('.cman-img');
const formEl = document.querySelector('.form-box');
const resetEl = document.querySelector('.reset-button');
const inputEl = document.querySelector('.input-box');
const inputValue = document
	.querySelector('.input-box')
	.addEventListener('keyup', function (event) {
		if (event.code === 'Enter') {
			event.preventDefault();
			document.querySelector('form').submit();
		}
        return value;
	});

    console.log(code )