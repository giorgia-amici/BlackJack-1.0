var Deck = require('../src/deck.js')

describe("Deck", function(){
 	var deck = new Deck

 	it('is an array', function(){
 		expect(deck.readyDeck).toBeArray;
 	});

 	it('is an array of 4 hashes', function(){
 		expect(deck.readyDeck.length).toEqual(4)
 		expect(deck.readyDeck[0]['flowers7']).toEqual(7)
 		expect(deck.readyDeck[1]['hearts8']).toEqual(8)
 		expect(deck.readyDeck[2]['spades9']).toEqual(9)
 		expect(deck.readyDeck[3]['diamondsA']).toEqual(11)
 	});

 	it('can pull one at random', function(){
 		deck.shuffle();

 	});

 	it('matches suits with face values', function(){
 		expect(deck.makeSuits()).toEqual()//result
 	})
});

//[7, 8, 9, 10, 10, 10, 10, 11] <= values

//[7, 8, 9, 10, J, Q, K, A]

//[flowers, hearts, diamonds, spades] <= suits