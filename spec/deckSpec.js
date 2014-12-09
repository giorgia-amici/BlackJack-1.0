var Deck = require('../src/deck.js')

describe("Deck", function(){
 	var deck = new Deck

 	it('is an array', function(){
 		expect(deck.readyDeck).toBeArray;
 	});

 	it('matches suits with face values', function(){
 		deck.makeSuits()
 		expect(deck.readyDeck[0]).toEqual('flowers7')
 	});

 	it('can pull one at random', function(){
 		
 	});

});
