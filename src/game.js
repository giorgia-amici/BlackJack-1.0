function Game(){
	this.turn
	this.cards = 6
	this.hands = 3
	this.player 
	this.pickFromDeck
	this.deck
	this.housePoints = []
	this.playerPoints = []
	this.houseTotal = 0
	this.playerTotal = 0
}

Game.prototype.addDeck = function(deck){
	this.deck = deck
}

Game.prototype.addPlayer = function(player){
	this.player = player;
}

Game.prototype.startGame = function(){
	if(this.player && this.deck !== null){
		this.turn = true
	}
}

Game.prototype.selectCard = function(){
	this.pickFromDeck = this.deck.readyDeck[Math.floor(Math.random() * this.deck.readyDeck.length)]
}

Game.prototype.removeCard = function(){
	 var index = this.deck.readyDeck.indexOf(this.pickFromDeck) 
	this.deck.readyDeck.splice(index, 1) 
};

Game.prototype.dealToPlayer = function(){
	this.selectCard()
	var dealPoint = parseInt(this.pickFromDeck.slice(-2))
	this.playerPoints.push(dealPoint)
	this.removeCard()
}

Game.prototype.houseDrawsCard = function(){
	this.selectCard()
	var drawPoint = parseInt(this.pickFromDeck.slice(-2))
	this.housePoints.push(drawPoint)
	this.removeCard()
}

Game.prototype.totalHouse = function(){
	this.houseTotal = this.housePoints.reduce(function(c, g){
		return c + g;
	});
}

Game.prototype.totalPlayer = function(){
	this.playerTotal = this.playerPoints.reduce(function(z, s){
		return z + s;
	});
}

Game.prototype.totalAll = function(){
	this.totalPlayer()
	this.totalHouse()
	return [this.playerTotal, this.houseTotal];
}

Game.prototype.updateCardsLeft = function(){
	this.cards !== 0 ? this.cards -= 1 : this.hands -= 1
};

Game.prototype.hitAgain = function(){
	this.player.calls === false ? this.dealToPlayer() : this.turn = true
};

Game.prototype.play = function(){
	this.updateCardsLeft() 
	this.turn === true ? this.houseDrawsCard() : this.hitAgain()
	this.turn = !this.turn
	return this.pickFromDeck
}

// Game.prototype.stop = function(){

// }

// Game.prototype.declareWinner = function(){

// }
















module.exports = Game;