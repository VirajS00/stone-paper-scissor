import stonePaperScissors from './classes';

const buttons = document.querySelectorAll('.button');
const output = document.querySelector('.output');

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
		output.innerHTML = '';
		let game = new stonePaperScissors(button.value);
		const { win, value } = game.show();
		output.textContent = `${win} ${value}`;
	});
});
