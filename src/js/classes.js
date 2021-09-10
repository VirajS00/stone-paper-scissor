class stonePaperScissors {
	constructor(input) {
		this.input = input;
		this.options = {
			stone: ['paper', 'scissors'],
			paper: ['stone', 'scissors'],
			scissors: ['paper', 'stone']
		};
	}

	randomNumber(max, min) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	randomizeOutput() {
		let randomNum;
		let randomOutcome;

		if (this.input === 'stone') {
			randomNum = this.randomNumber(0, 2);
			randomOutcome = this.options.stone[randomNum];
		}

		if (this.input === 'paper') {
			randomNum = this.randomNumber(0, 2);
			randomOutcome = this.options.paper[randomNum];
		}

		if (this.input === 'scissors') {
			randomNum = this.randomNumber(0, 2);
			randomOutcome = this.options.scissors[randomNum];
		}

		return randomOutcome;
	}

	winLoose() {
		let output = this.randomizeOutput();
		let win;
		if (this.input === 'stone') {
			if (output === 'scissors') {
				win = true;
			} else {
				win = false;
			}
		} else if (this.input === 'paper') {
			if (output === 'stone') {
				win = true;
			} else {
				win = false;
			}
		} else if (this.input === 'scissors') {
			if (output === 'paper') {
				win = true;
			} else {
				win = false;
			}
		}

		return [output, win];
	}

	show() {
		let output = this.winLoose();
		let win = output[1] ? 'Win!' : 'Loose';
		let value = output[0];
		console.log(`Input: ${this.input}`);
		console.log(`Value: ${value}`);
		console.log(`Wind or loose: ${win}`);
	}
}

export default stonePaperScissors;
