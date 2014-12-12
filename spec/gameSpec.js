var Game = require('../src/game.js')

describe("Game", function(){

	var game;

	beforeEach(function(){
		game = new Game;
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

	describe('', function(){

	 	xit('', function(){
	 		
	 	});

	 	xit('', function(){
	 		
	 	});

	});

});

