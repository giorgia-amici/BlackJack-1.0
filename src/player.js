function Player(){
	this.playerCalls
}

Player.prototype.hitMe = function(){
	this.playerCalls = false
}

Player.prototype.stop = function(){
	this.playerCalls = true
}


module.exports = Player;