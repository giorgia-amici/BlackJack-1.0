var Game = require('./src/game.js');
var Deck = require('./src/deck.js');
// var Player = require('./src/player.js');





// var deck = runner.deck
// var game = runner.game
// var player = runner.player




// game.addPlayer(player)
// game.addDeck(deck)
// game.deck.makeSuits()
// game.startGame()

module.exports.game = new Game();
module.exports.deck = new Deck();
// module.exports.player = new Player();