var Player = require('../src/player.js')

describe("Player", function(){

	var player;

	beforeEach(function(){
		player = new Player;
	});

	describe('before being added to the game', function(){

	 	it('the calls state should be undefined', function(){
	 		expect(player.calls).toBe(undefined);
	 	});

	});

	describe('when playing the game', function(){

	 	it('the player can request another card', function(){
	 		player.hitMe()
	 		expect(player.calls).toBe(false);
	 	});

	 	it('the player can stop (call) the game', function(){
	 		player.stopGame()
	 		expect(player.calls).toBe(true);
	 	});

	});

});
