(function() {
	var Extradino = {
		oldGameOver: null,
		enableImmortality: function() {
			this.oldGameOver = Runner.prototype.gameOver;
			
			Runner.prototype.gameOver = function() {
				console.log('Game is over, but you alive! A-ta-ta, Hacker!');
			}
			
			console.log('Immortality enabled!');
		},
		disableImmortality: function() {
			Runner.prototype.gameOver = this.oldGameOver;
			
			this.oldGameOver = null;
			
			console.log('Immortality disabled!');
		},
		
		moreSpeed: function() {
			console.log('Current speed: %d', ++Runner.instance_.currentSpeed);
		},
		
		lessSpeed: function() {
			console.log('Current speed: %d', --Runner.instance_.currentSpeed);
		}
	}
	
	document.addEventListener('keydown', function(e) {
		switch(e.keyCode) {
			case 37: // LEFT ARROW
				Extradino.lessSpeed();
			break;
			case 39: // RIGHT ARROW
				Extradino.moreSpeed();
			break;
			case 90: // KEY "Z"
				Extradino.oldGameOver ? Extradino.disableImmortality() : Extradino.enableImmortality();
			break;
		}
	});
}());