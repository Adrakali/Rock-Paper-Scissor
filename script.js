const rsp = ['Rock', 'Scissor', 'Paper'];
const rockBtn = document.querySelector('.rock');
const scissorBtn = document.querySelector('.scissor');
const paperBtn = document.querySelector('.paper');
const btns = document.querySelectorAll('button');
const container = document.querySelector('.game-container');
let resultText = document.querySelector('.result');
let display = document.querySelector('.display');

btns.forEach((btn) =>
	btn.addEventListener('click', (e) => {
		let playerChoice = e.target.className;
		computerPlay(randomNumber(), playerChoice);
	})
);

function randomNumber() {
	return Math.floor(Math.random() * rsp.length);
}

function computerPlay(computerChoice, playerChoice) {
	let c = rsp[computerChoice];
	for (let i = 0; i < rsp.length; i++) {
		let template = `${c} VS ${playerChoice}`;
		display.innerHTML = template;
	}
	if (c === playerChoice) {
		resultText.innerHTML = "It's a draw!";
	}
	if (c === 'Rock' && playerChoice === 'Paper') {
		resultText.innerHTML = 'You win!';
	}
	if (c === 'Rock' && playerChoice === 'Scissor') {
		resultText.innerHTML = 'You loose!';
	}
	if (c === 'Scissor' && playerChoice === 'Paper') {
		resultText.innerHTML = 'You loose!';
	}
	if (c === 'Scissor' && playerChoice === 'Rock') {
		resultText.innerHTML = 'You win!';
	}
	if (c === 'Paper' && playerChoice === 'Rock') {
		resultText.innerHTML = 'You loose!';
	}
	if (c === 'Paper' && playerChoice === 'Scissor') {
		resultText.innerHTML = 'You win!';
	}
}
