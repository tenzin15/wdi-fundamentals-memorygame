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
	
	setTimeout(resetImages, 2000);
}

function resetImages() {
	var card = document.getElementsByClassName('card');
	idx = 0;
	while (idx < card.length) {
		card[idx++].innerHTML = '<img src = \'facedown.jpg\' alt = \'Card face down\'>';
	}
}

function isTwoCards() {
	
	dataCard = this.getAttribute('data-card');
	cardsInPlay.push(dataCard);

	if (dataCard === 'king') {
		this.innerHTML = '<img src = \'king.jpg\' alt = \'King of Hearts\'>';
	}

	if (dataCard === 'queen') {
		this.innerHTML = '<img src = \'queen.jpg\' alt = \'Queen of Hearts\'>';
	}

	if (cardsInPlay.length === 2) {
		isMatch();
		cardsInPlay = [];
	}
}

function createBoard() {
	var gameBoard = document.getElementById('game-board');
	
	for (var i = 0; i < cards.length; i++) {
		
		var divElement = document.createElement('div');
		divElement.className = 'card';
		divElement.setAttribute('data-card', cards[i]);
		divElement.innerHTML = '<img src = \'facedown.jpg\' alt = \'Card face down\'>';
		divElement.addEventListener('click', isTwoCards);
		gameBoard.appendChild(divElement);
	}
}

createBoard();















