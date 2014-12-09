var Deck = require('../src/deck.js')

describe("Deck", function(){
 	

 	it('is an array', function(){
 		var deck = new Deck
 		expect(deck.readyDeck).toBeArray;
 	});

 	it('matches suits with face values', function(){
 		var deck = new Deck
 		deck.makeSuits()
 		expect(deck.readyDeck[0]).toEqual('flowers7')
 	});

 	it('can pull one at random', function(){
 		var deck = new Deck
 		deck.makeSuits()
 		deck.deal()
 		expect(deck.pickFromDeck).not.toBe(null)
 	});

 	it("will delete the player's pick", function(){
 		var deck = new Deck
 		deck.makeSuits()
 		deck.deal()
 		expect(deck.readyDeck.length).toEqual(31)
 	});

 	it("will assign a score to the player", function(){
 		var deck = new Deck
 		deck.makeSuits()
 		deck.deal()
 		deck.cardValue()
 		// expect(deck.pickFromDeck)

 	});

});
