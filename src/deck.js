
function Deck(){
	// this.pickFromDeck
	this.readyDeck = [{ flowers7 : 7,
										  flowers8 : 8,
											flowers9 : 9,
											flowers10 : 10,
											flowersJ : 10,
											flowersQ : 10,
											flowersK : 10,
											flowersA : 11 },
										{ hearts7 : 7,
										  hearts8 : 8,
											hearts9 : 9,
											hearts10 : 10,
											heartsJ : 10,
											heartsQ : 10,
											heartsK : 10,
											heartsA : 11 },
										{	spades7 : 7,
										  spades8 : 8,
											spades9 : 9,
											spades10 : 10,
											spadesJ : 10,
											spadesQ : 10,
											spadesK : 10,
											spadesA : 11 },
										{ diamonds7 : 7,
										  diamonds8 : 8,
											diamonds9 : 9,
											diamonds10 : 10,
											diamondsJ : 10,
											diamondsQ : 10,
											diamondsK : 10,
											diamondsA : 11}]
	this.suits = ["flowers", "hearts", "diamonds", "spades"];
	this.faceValues = [7, 8, 9, 10, "J", "Q", "K", "A"];
}


Deck.prototype.makeSuits = function(){
	var results = []
	for(var i = 0; i < this.suits.length; i++){
		 for(var j = 0; j < this.faceValues.length; j++){
		 	results.push(this.suits[i]+this.faceValues[j])
		 }
	}
	return results
}

module.exports = Deck;

Deck.prototype.shuffle = function() {
	var hashFromDeck = this.readyDeck[Math.floor(Math.random() * this.readyDeck.length)]
	this.pickFromDeck = hashFromDeck[Math.floor(Math.random() * hashFromDeck.length)]
};




//  var flowers = array.map(function(x){
// ... return 'flowers' + x;
// ... });