let img

const speedInput = 0.1
const sizeInput = document.querySelector("input.size")
const distortX = 30
const distortY = 30



function preload () {

	img = loadImage('assets/ayuso.jpg')

}

function setup () {

	createCanvas(580, 580)

}

function draw () {

	background(0)

	const tileSize = sizeInput.value

	for (let x = 0; x < 250; x = x + 1) {

		for (let y = 0; y < 80; y = y + 1) {

			const waveX = sin(frameCount * speedInput + x * 0.5 + y * 0.3) * distortX
			const waveY = sin(frameCount * speedInput + x * 0.5 + y * 0.3) * distortY

			const sx = x * tileSize + waveX
			const sy = y * tileSize + waveY
			const sw = tileSize
			const sh = tileSize

			const dx = x * tileSize
			const dy = y * tileSize
			const dw = tileSize
			const dh = tileSize

			image (img, dx, dy, dw, dh, sx, sy, sw, sh)

		}

	}		
		
}

