
function Deck(){
	this.readyDeck = []
	this.suits = ["flowers", "hearts", "diamonds", "spades"];
	this.faceValues = ["07", "08", "09", "10", "J10", "Q10", "K10", "A11"];
}

Deck.prototype.makeSuits = function(){
	for(var i = 0; i < this.suits.length; i++){
		 for(var j = 0; j < this.faceValues.length; j++){
		 	this.readyDeck.push(this.suits[i]+this.faceValues[j])}
	}
	return this.readyDeck
}

module.exports = Deck;
