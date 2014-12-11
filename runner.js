var Game = require('./src/game.js');
var Deck = require('./src/deck.js');
// var Player = require('./src/player.js')

// var Player = function(){}

// var deck = runner.deck
// var game = runner.game





// game.addPlayer(player)
// game.addDeck(deck)
// game.deck.makeSuits()
// game.startGame()

module.exports.game = new Game();
module.exports.deck = new Deck();
// module.exports.