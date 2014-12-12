var Game = require('../src/game.js')

describe("Game", function(){

	var game, deck, player;

	beforeEach(function(){
		game = new Game;
		deck = jasmine.createSpyObj('deck', ['readyDeck', 'makeSuits'])
		player = jasmine.createSpyObj('player', [''])
	});

	describe('before deck or player is added', function(){

	 	it('is initialised with an undefined turn state', function(){
	 		expect(game.turn).toBe(undefined);
	 	});

	 	it('is initialised with a 6 card countdown', function(){
	 		expect(game.cards).toEqual(6);
	 	});

	 	it('is initialised with a 3 hand countdown', function(){
	 		expect(game.hands).toEqual(3);
	 	});

	 	it('is initialised with an undefined player', function(){
	 		expect(game.player).toBe(undefined);
	 	});

	 	it('is initialised with an undefined pickFromDeck', function(){
	 		expect(game.pickFromDeck).toBe(undefined);
	 	});

	 	it('is initialised with an undefined deck', function(){
	 		expect(game.deck).toBe(undefined);
	 	});

	 	it('is initialised with an empty housePoints array', function(){
	 		expect(game.housePoints).toEqual([]);
	 	});

	 	it('is initialised with an empty playerPoints array', function(){
	 		expect(game.playerPoints).toEqual([]);
	 	});

	 	it('is initialised with a zero houseTotal score', function(){
	 		expect(game.houseTotal).toEqual(0);
	 	});

	 	it('is initialised with a zero playerTotal score', function(){
	 		expect(game.playerTotal).toEqual(0);
	 	});

	});

	describe('when prepping to play', function(){

	 	it('can add a deck', function(){
	 		game.addDeck(deck)
	 		expect(game.deck).toEqual(deck)
	 	});

	 	it('can add a player', function(){
	 		game.addPlayer(player)
	 		expect(game.player).toEqual(player)
	 	});

	 	it('can start the game if all is ready and trigger the deck\'s makeSuits method', function(){
	 		game.addDeck(deck)
	 		game.addPlayer(player)
	 		game.startGame()
	 		expect(game.turn).toBe(true)
	 		expect(deck.makeSuits).toHaveBeenCalled();
	 	});

	});

	describe('when playing the game', function(){

		beforeEach(function(){
			game.addDeck(deck);
			game.addPlayer(player);
			game.startGame();
		});

		it('', function(){

		});

	});

});

