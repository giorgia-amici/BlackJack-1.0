function Player(){
	this.calls
}

Player.prototype.hitMe = function(){
	this.calls = false
}

Player.prototype.stop = function(){
	this.calls = true
}


module.exports = Player;