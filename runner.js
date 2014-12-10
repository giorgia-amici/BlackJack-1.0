var Game = require('./src/game.js')
var Deck = require('./src/deck.js')
// var Player = require('./src/player.js')
var game = new Game
var deck = new Deck
var Player = function(){}
var player = new Player
game.addDeck(deck)
game.addPlayer(player)
