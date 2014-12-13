angular.module('blackJack').controller('gameCtrl', ['$scope', 'Deck', 'Player', 'Game', function($scope, Deck, Player, Game) {
	$scope.deck = new Deck
	$scope.deck.makeSuits()
	$scope.player = new Player
	$scope.game = new Game
	$scope.game.addDeck($scope.deck)
	$scope.game.addPlayer($scope.player)
	$scope.game.startGame()
	// if that is the case I want sth to be printed on the screen
	$scope.game.play()
	// shuffle the cards
	// after each card either player and game can choose if continue bidding or not
	// so I wanto to buttons for that
	


	// console.log($scope.deck)
	// console.log($scope.player)
	// console.log($scope.game)
	// console.log($scope.game.deck)




	}
]) 
