function Game(){
	this.turn
	this.hands = 6
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

Game.prototype.countingPoints = function(array){
	var total = 0
	for(var i in array) {total += array[i];}
		return total
}

Game.prototype.updateHandsLeft = function(){
	this.hands !== 0 ? this.hands -= 1 : 'game over div'
};

Game.prototype.play = function(){
	this.updateHandsLeft()                                                                                                                                                                                                                            
	if(this.turn === true){
		this.houseDrawsCard() 
		this.turn = false
		return this.pickFromDeck
	}
	else{
		this.dealToPlayer()
		this.turn = true
		return this.pickFromDeck
	}
	
}

Game.prototype.winner = function(x, y){
	this.countingPoints(x) > this.countingPoints(y) ? 'house wins' : 'probl tua'
}


// > game.countingPoints(game.housePoints) > game.countingPoints(game.playerPoints) ? 'i am working' : 'nn'
// 'i am working



















module.exports = Game;