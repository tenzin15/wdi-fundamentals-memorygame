console.log("JS file is connected to HTML! Woo!")

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function createCards() {
	var gameBoard = document.getElementById('game-board');
	idx = 0;
	while (idx < 4) {
		var divElement = document.createElement('div');
		divElement.className = 'card';
		gameBoard.appendChild(divElement);
		idx++;
	}
}

function isMatch() {
	if (cardsInPlay[0] === cardsInPlay[1])
		alert("You found a match.")
	else
		alert("No match! Sorry, try again.")
	
	var cards = document.querySelectorAll('.card');
	for (var i = 0; i < cards.length; i++) {
		cards[i].innerHTML = "";
	}
	cards = ["queen", "queen", "king", "king"];
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));

	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

function createBoard() {
	var gameBoard = document.getElementById('game-board');
	
	for (var i = 0; i < cards.length; i++) {
		
		var divElement = document.createElement('div');
		divElement.className = 'card';
		divElement.setAttribute('data-card', cards[i]);
		divElement.addEventListener('click', isTwoCards);
		gameBoard.appendChild(divElement);

		// divElement.addEventListener('click', function() {
		// 	if (divElement.getAttribute('data-card') === "king"){
		// 		divElement.innerHTML = "<img src=\"king.png\" alt=\"King of Hearts\" />";
		// 	}
		// 	else {
		// 		divElement.innerHTML = "<img src=\"queen.png\" alt=\"Queen of Hearts\" />";
		// 	}
		// 	console.log("This is " + divElement.getAttribute('data-card'));
		// });

	}
}

function flipCard() {
	var cards = document.querySelectorAll('.card');
	// for (var i = 0; i < cards.length; i++) {
	// 	cards[i].addEventListener('click', function() {
	// 		if (cards[i].getAttribute('data-card') === 'king') {
	// 			console.log("found king");
	// 		}
	// 	});
	// }
}

createBoard();















