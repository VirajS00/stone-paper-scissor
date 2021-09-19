import stonePaperScissors from './classes';
import showScore from './functions';

const buttons = document.querySelectorAll('.button');
const computerButton = document.querySelector('.button.computer');

const stoneTemplate = document.querySelector('template#stone');
const paperTemplate = document.querySelector('template#paper');
const scissorTemplate = document.querySelector('template#scissors');

let stoneContent = stoneTemplate.content.cloneNode(true);
let paperContent = paperTemplate.content.cloneNode(true);
let scissorContent = scissorTemplate.content.cloneNode(true);

let rounds = 0;
let score = 0;

const scoreContainer = document.querySelector('.score-box-container');

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
		let game = new stonePaperScissors(button.value);
		const { win, value } = game.show();
		let buttonClass = win ? 'win' : 'loose';
		let computerClass = win ? 'loose' : 'win';
		if (win) {
			score++;
		}
		button.classList.add(buttonClass);
		if (value === 'stone') {
			computerButton.style.justifyContent = 'start';
			computerButton.innerHTML = '';
			computerButton.style.paddingLeft = '4.5em';
			computerButton.classList.add(computerClass);
			computerButton.appendChild(stoneContent);
			stoneContent = stoneTemplate.content.cloneNode(true);
		} else if (value === 'paper') {
			computerButton.style.justifyContent = 'start';
			computerButton.innerHTML = '';
			computerButton.style.paddingLeft = '4.5em';
			computerButton.classList.add(computerClass);
			computerButton.appendChild(paperContent);
			paperContent = paperTemplate.content.cloneNode(true);
		} else if (value === 'scissors') {
			computerButton.style.justifyContent = 'start';
			computerButton.innerHTML = '';
			computerButton.style.paddingLeft = '4.5em';
			computerButton.classList.add(computerClass);
			computerButton.appendChild(scissorContent);
			scissorContent = scissorTemplate.content.cloneNode(true);
		}
		rounds++;

		if (rounds === 5) {
			showScore({
				score: score,
				button: button,
				buttonClass: buttonClass,
				computerClass: computerClass
			});
		} else {
			setTimeout(() => {
				computerButton.innerHTML = '';
				button.classList.remove(buttonClass);
				const loader = document.createElement('div');
				loader.classList.add('loader');
				computerButton.appendChild(loader);
				computerButton.style.justifyContent = 'center';
				computerButton.style.paddingLeft = '0';
				computerButton.classList.remove(computerClass);
			}, 2000);
		}
	});
});

scoreContainer.addEventListener('click', (e) => {
	if (e.target !== document.querySelector('.score-box')) return;

	scoreContainer.style.pointerEvents = 'none';
	scoreContainer.style.opacity = 0;

	document.querySelector('.score-box h1 > span').innerHTML = '';
});
