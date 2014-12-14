function Player(){
	this.calls = false
}

Player.prototype.stop = function(){
	this.calls = true
}


module.exports = Player;