class GuessingGame {
	constructor() {
		this.min = null
		this.max = null
		this.mid = null
		this.number = number
	}

	setRange(min, max) {
		this.min = min
		this.max = max
		console.log('this.min', this.min)
		console.log('this.max', this.max)
	}

	guess() {
		// while (this.min <= this.max) {
		// 	console.log('\nwhile loop')
		this.mid = Math.round((this.max - this.min) / 2 + this.min)
		// console.log('this.mid', this.mid)
		console.log('this.number', this.number)
		if (this.number === this.mid) return this.mid
		return this.mid
		// else if (this.number < this.mid) return this.lower()
		// else return this.greater()
		// }
	}

	lower() {
		// console.log('\nlower function')
		this.max = this.mid - 1
		// console.log('this.max', this.max)
		return this.guess()
	}

	greater() {
		// console.log('\ngreater function')
		this.min = this.mid + 1
		// console.log('this.min', this.min)
		return this.guess()
	}
}

// const number = 409;
// const game = new GuessingGame();
// game.setRange(0, 4048)
// let result = game.guess()

// console.log('result', result)

module.exports = GuessingGame;
