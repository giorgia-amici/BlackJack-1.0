
function Deck(){
	this.pickFromDeck
	this.readyDeck = []
	this.suits = ["flowers", "hearts", "diamonds", "spades"];
	this.faceValues = [7, 8, 9, 10, "J", "Q", "K", "A"];
}

Deck.prototype.makeSuits = function(){
	for(var i = 0; i < this.suits.length; i++){
		 for(var j = 0; j < this.faceValues.length; j++){
		 	this.readyDeck.push(this.suits[i]+this.faceValues[j])}
	}
	return this.readyDeck
}

Deck.prototype.removeCard = function() {
	var index = this.readyDeck.indexOf(this.pickFromDeck)
	this.readyDeck.splice(index, 1)
};

Deck.prototype.deal = function() {
	this.pickFromDeck = this.readyDeck[Math.floor(Math.random() * this.readyDeck.length)]
	return this.removeCard(this.pickFromDeck)
};


module.exports = Deck;
