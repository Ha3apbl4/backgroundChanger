const BUTTON = document.getElementById('btn')
const SPAN_COLORS = document.querySelector('.color')

const HEX = [
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
]
BUTTON.addEventListener('click', () => {
	let hexColor = generateHex()
	document.body.style.backgroundColor = hexColor
	SPAN_COLORS.style.color = hexColor
	SPAN_COLORS.textContent = hexColor
})

function generateHex() {
	let hexColor = '#'
	for (let i = 0; i < 6; i++) {
		hexColor += HEX[getRandomNumber()]
	}
	return hexColor
}

function getRandomNumber() {
	return Math.floor(Math.random() * HEX.length)
}
