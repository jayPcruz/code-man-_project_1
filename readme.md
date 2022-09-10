**_ USER STORY _**

- AAU i want know the rules of the game
- AAU i want to see how many letters the word i have to guess has
- AAU i want to see a keyboard or letter to input my guess
- AAU if my guess is correct i want to see the letter appear in the appropriate blank space
- AAU if i guess incorrectly i want to see the incorrect letter turn red on the keyboard(or a list of incorrect letters appear in a div \*\*if i use input box instead of keyboard)
- AAU if i guess the correct word in the allotted attempts i want to see a message appear that i won the game
- AAU if i do not guess the word in the allowed attempts i want to see the missed word appear and a message that i lost the game
- AAU i want to see a reset button

**_ CODE(MAN) PSEUDO-CODE _**

HTML

> h1 for name of game
> div with img that will store the images showing how many missed attempts
> button to reset the game
> div with class of 'current-guess' to store players current guess
> div with class of 'keyboard' to store keyboard OR div with a form for player to type in their letter guess
> if using form -- div with class of 'stored-letter' to hold incorrect letters that were guessed

CONSTANTS

> constant for letters (A thru Z) player can choose from **_ if using keyboard_**
> constant defining amount of wrong letter guesses before player loses game (5)
> constant defining words of the game
> constant containing definition of the winning word

APP' STATE VARIABLES

> variable that randomly chooses word from constant word bank
> variable that keeps track of wrong letter choices
> variable that keeps track of correct letter choices
> variable that keeps true or false on whether current guess is in hidden word
> variable that keeps track of wrong number of choices
> variable that keeps track of the number of spaces in the hidden word

CACHED ELEMENT REFERENCE

> cache img element from DOM
> cache div.keyboard from DOM - OR - cache div.stored-letters
> cache div.current guess from DOM
> cache reset button from DOM

LISTENERS

> listen for button being clicked
> listen for reset button click

FUNCTIONS

> function which begins game, calls function that randomly chooses word,
> function which randomly chooses from hidden word bank
> function which which displays number of blank spaces of hidden word
> function which determines if guess is right or wrong (true or false)
> if guess is correct display correct letter on screen
> if guess is incorrect turn letter red on keyboard OR display wrong letter in div & count toward allowed incorrect guesses
> if incorrect guesses === 5, display a you lose message
> if player guesses word before 5 incorrect guesses display a you win message
> function which changes the img if player chooses wrong letter
> function which resets game
> CALL init function

**_ LIST OF HIDDEN WORDS _**

CREDIT: https://code.org/curriculum/docs/k-5/glossary
CREDIT: https://hackr.io/blog/programming-terms-definitions-for-beginners

accessibility: The design of products, devices, services, or environments taking into consideration the ability for all users to access, including people who experience disabilities or those who are limited by older or slower technology.

algorithm: A list of steps to finish a task.

code: The language that programmers create and use to tell a computer what to do.

function: A piece of code that you can easily call over and over again.

variable: A placeholder for a piece of information that can change.

pixel: Short for "picture element", the fundamental unit of a digital image, typically a tiny square or dot that contains a single point of color of a larger image.

Boolean: A Boolean expression or Boolean logic is an expression used for creating statements that are either TRUE or FALSE.

Constants: A constant (also known as Const) is a term used to describe a value that does not change throughout the execution of the program, unlike a variable.

Declaration: A statement that describes a variable, function or any other identifier is called a declaration.

Syntax: Similar to human languages, programming languages have their own set of rules on how statements can be conveyed. The set of these rules is known as syntax.
