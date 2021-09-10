import stonePaperScissors from './classes';

const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
		let game = new stonePaperScissors(button.value);
		game.show();
	});
});
