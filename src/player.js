function Player(){
	this.calls = false
	this.pickFromDeckPlayer = []
	this.temp

}

Player.prototype.stop = function(){
	this.calls = true
}


module.exports = Player;