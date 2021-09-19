const showScore = ({ score, button, buttonClass, computerClass }) => {
	const computerButton = document.querySelector('.button.computer');
	const container = document.querySelector('.score-box-container');
	const scoreCont = document.querySelector('.score-box h1 > span');

	scoreCont.textContent = score;
	container.style.opacity = '1';
	container.style.pointerEvents = 'fill';

	computerButton.innerHTML = '';
	button.classList.remove(buttonClass);
	const loader = document.createElement('div');
	loader.classList.add('loader');
	computerButton.appendChild(loader);
	computerButton.style.justifyContent = 'center';
	computerButton.style.paddingLeft = '0';
	computerButton.classList.remove(computerClass);
};

export default showScore;
