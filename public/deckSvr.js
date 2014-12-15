var blackjackServices = angular.module('blackjackServices', []);


blackjackServices.factory('Deck',[function(){
	var Deck = function(){
		this.readyDeck = []
		this.suits = ["clubs", "hearts", "diamonds", "spades"];
		this.faceValues = ["07", "08", "09", "10", "J10", "Q10", "K10", "A11"];
	};

Deck.prototype.makeSuits = function(){
	for(var i = 0; i < this.suits.length; i++){
		 for(var j = 0; j < this.faceValues.length; j++){
		 	this.readyDeck.push(this.suits[i]+this.faceValues[j])}
	}
	return this.readyDeck
};

return Deck
}])

blackjackServices.factory('Player', [function(){
	var Player = function(){
		this.calls = false
		this.pickFromDeckPlayer 
	};
Player.prototype.stop = function(){
	this.calls = true
}

return Player

}])

blackjackServices.factory('Game', [function(){
	var Game = function(){
	this.turn = true 
	this.cards = 6
	this.hands = 3
	this.player 
	this.pickFromDeck 
	this.deck
	this.housePoints = []
	this.playerPoints = []
	this.houseTotal = 0
	this.playerTotal = 0
	this.calls = false

};

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

Game.prototype.selectCardComputer = function(){
	this.pickFromDeck = this.deck.readyDeck[Math.floor(Math.random() * this.deck.readyDeck.length)]
}

Game.prototype.selectCardPlayer = function(){
	this.player.pickFromDeckPlayer = this.deck.readyDeck[Math.floor(Math.random() * this.deck.readyDeck.length)]
}

Game.prototype.removeCard = function(){
	 var index = this.deck.readyDeck.indexOf(this.pickFromDeck) 
	this.deck.readyDeck.splice(index, 1) 
};

Game.prototype.dealToPlayer = function(){
	this.selectCardPlayer()
	var dealPointP = parseInt(this.player.pickFromDeckPlayer.slice(-2))
	this.playerPoints.push(dealPointP)
	this.removeCard()
}

Game.prototype.houseDrawsCard = function(){
	this.selectCardComputer()
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
};

Game.prototype.resetPointsWithNewHand = function(){
	this.housePoints = []
	this.playerPoints = []
};

Game.prototype.newHand= function(){
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


return Game
}])