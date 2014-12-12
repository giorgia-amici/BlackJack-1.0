function Player(){
	this.calls
}

Player.prototype.hitMe = function(){
	this.calls = false
}

Player.prototype.stopGame = function(){
	this.calls = true
}


module.exports = Player;