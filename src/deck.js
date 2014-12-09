
function Deck(){
	// this.pickFromDeck
	this.readyDeck = []
	this.suits = ["flowers", "hearts", "diamonds", "spades"];
	this.faceValues = [7, 8, 9, 10, "J", "Q", "K", "A"];
}


Deck.prototype.makeSuits = function(){
	for(var i = 0; i < this.suits.length; i++){
		 for(var j = 0; j < this.faceValues.length; j++){
		 	this.readyDeck.push(this.suits[i]+this.faceValues[j])
		 }
	}
	return this.readyDeck
}

module.exports = Deck;

// Deck.prototype.shuffle = function() {
// 	var hashFromDeck = this.readyDeck[Math.floor(Math.random() * this.readyDeck.length)]
// 	this.pickFromDeck = hashFromDeck[Math.floor(Math.random() * hashFromDeck.length)]
// };




//  var flowers = array.map(function(x){
// ... return 'flowers' + x;
// ... });