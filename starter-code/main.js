console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*
if (cardOne === cardTwo) {
	alert("You found a match!")
}
else {
	alert("Sorry, try again.")
}

if (cardThree === cardFour) {
	alert("You found a match!")
}
else {
	alert("Sorry, try again.")
}

if (cardTwo === cardFour) {
	alert("You found a match!")
}
else {
	alert("Sorry, try again.")
}
*/

function createCards(){
	var gameBoard = document.getElementById('game-board');
	console.log(gameBoard)
	idx = 0;
	while (idx < 4) {
		var divElement = document.createElement('div');
		divElement.className = 'card';
		gameBoard.appendChild(divElement);
		idx++;
	}
}

createCards();
