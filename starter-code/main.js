console.log("JS file is connected to HTML! Woo!")

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function createCards(){
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
		alert("Sorry, try again.")
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
		gameBoard.appendChild(divElement);

		cards[i].setAttribute('data-card', cards[i]);
		cards[i].addEventListener('click', isTwoCards);
	}
}

createBoard();