var Deck = require('../src/deck.js')

describe("Deck", function(){

	var deck;

	beforeEach(function(){
		deck = new Deck;
	});

	describe('before being added to the game', function(){

	 	it('it should be initialized with an empty array', function(){
	 		expect(deck.readyDeck).toEqual([]);
	 	});

	 	it('it should be initialized with an array of suits', function(){
	 		expect(deck.suits).toEqual(["flowers", "hearts", "diamonds", "spades"]);
	 	});

	 	it('it should be initialized with an array of values', function(){
	 		expect(deck.faceValues).toEqual(["07", "08", "09", "10", "J10", "Q10", "K10", "A11"]);
	 	});

	});

	describe('before play begins', function(){

	 	it('the suits and faceValues arrays are looped over to fill the empty readyDeck array with a complete game deck', function(){
	 		deck.makeSuits()
	 		expect(deck.readyDeck[0]).toEqual('flowers07')
	 		expect(deck.readyDeck[31]).toEqual('spadesA11')
	 	});

	});

});
