function Game(){
	this.turn
	this.cards = 6
	this.hands = 3
	this.player 
	this.pickFromDeck = []
	this.temp
	this.deck
	this.housePoints = []
	this.playerPoints = []
	this.houseTotal = 0
	this.playerTotal = 0
	this.calls = false
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

Game.prototype.selectCardPlayer = function(){
	this.player.pickFromDeckPlayer.push(this.deck.readyDeck[Math.floor(Math.random() * this.deck.readyDeck.length)])
	this.player.temp = this.player.pickFromDeckPlayer.toString()
}

Game.prototype.selectCardComputer = function(){
	this.pickFromDeck.push(this.deck.readyDeck[Math.floor(Math.random() * this.deck.readyDeck.length)])
	this.temp = this.pickFromDeck.toString()
}

Game.prototype.removeCard = function(){
	 var index = this.deck.readyDeck.indexOf(this.temp) 
	this.deck.readyDeck.splice(index, 1) 
	var indexPl = this.deck.readyDeck.indexOf(this.player.temp) 
	this.deck.readyDeck.splice(indexPl, 1) 
};

Game.prototype.dealToPlayer = function(){
	this.selectCardPlayer()
	var dealPoint = parseInt(this.player.temp.slice(-2))
	this.playerPoints.push(dealPoint)
	this.removeCard()
}

Game.prototype.houseDrawsCard = function(){
	this.selectCardComputer()
	var drawPoint = parseInt(this.temp.slice(-2))
	this.housePoints.push(drawPoint)
	this.removeCard()
	return this.pickFromDeck
}

Game.prototype.totalHouse = function(){
	this.houseTotal = this.housePoints.reduce(function(currentValue, indexValue){
		return currentValue + indexValue;
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
};

Game.prototype.resetPointsWithNewHand = function(){
	this.housePoints = []
	this.playerPoints = []
};

Game.prototype.newHand = function(){
	this.hands -= 1
	this.cards = 5 
 	this.resetPointsWithNewHand()
};

Game.prototype.updateCardsLeft = function(){
	this.cards !== 0 ? this.cards -= 1 : resetPointsWithNewHand()
};

Game.prototype.hitAgain = function(){
	this.player.calls === false ? this.dealToPlayer() : this.turn = true
};

Game.prototype.play = function(){
	this.updateCardsLeft() 
	this.turn === true ? this.houseDrawsCard() : this.hitAgain()
	this.turn = !this.turn
	this.temp = null
	this.player.temp = null
};

Game.prototype.stop = function(){
	this.calls = true
	this.turn = false
	this.playerWins()
};

	Game.prototype.declareWinner = function(){
		this.totalAll()
		if(this.calls === true && this.player.calls === true){
			return this.playerTotal
	}
};

	Game.prototype.playerWins = function(){
			this.totalAll()
			if(this.playerTotal > this.houseTotal){
				this.playerTotal <= 21 ? this.declareWinner() : this.houseWins()
			}
	};

	Game.prototype.houseWins = function(){
		return this.houseTotal
	};

	Game.prototype.anyBlackJack = function(num){
		return num === 21;
	};


module.exports = Game;