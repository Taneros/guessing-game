class GuessingGame {
	constructor() {
		this.min = null
		this.max = null
		this.mid = null
	}

	setRange(min, max) {
		this.min = min
		this.max = max
	}

	guess() {
		console.log('\nguess function')
		this.mid = Math.round((this.max - this.min) / 2) + this.min
		return this.mid
	}

	lower() {
		console.log('\nlower function')
		this.max = this.mid
		return this.guess()
	}

	greater() {
		console.log('\ngreater function')
		this.min = this.mid
		return this.guess()
	}
}

// const number = 409;
// const game = new GuessingGame();
// game.setRange(0, 4048)
// let result = game.guess();
// game.lower();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.lower();
// result = game.guess();

// console.log('result', result)

module.exports = GuessingGame;
