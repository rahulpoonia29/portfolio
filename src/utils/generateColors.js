function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomBaseColor() {
	return {
		h: getRandomInt(0, 360),
		s: getRandomInt(50, 100), // Constrain saturation to 50%-100% for vibrancy
		l: getRandomInt(30, 70), // Constrain lightness to 30%-70% for mid-range lightness
	};
}

function hslToRgb(h, s, l) {
	s /= 100;
	l /= 100;
	let c = (1 - Math.abs(2 * l - 1)) * s;
	let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
	let m = l - c / 2;
	let r = 0,
		g = 0,
		b = 0;
	if (0 <= h && h < 60) {
		r = c;
		g = x;
		b = 0;
	} else if (60 <= h && h < 120) {
		r = x;
		g = c;
		b = 0;
	} else if (120 <= h && h < 180) {
		r = 0;
		g = c;
		b = x;
	} else if (180 <= h && h < 240) {
		r = 0;
		g = x;
		b = c;
	} else if (240 <= h && h < 300) {
		r = x;
		g = 0;
		b = c;
	} else if (300 <= h && h < 360) {
		r = c;
		g = 0;
		b = x;
	}
	r = Math.round((r + m) * 255);
	g = Math.round((g + m) * 255);
	b = Math.round((b + m) * 255);
	return `rgb(${r}, ${g}, ${b})`;
}

function generateHarmoniousColors() {
	let baseColor = randomBaseColor();
	let colors = [baseColor];

	// Generate analogous colors by shifting hue
	for (let i = 1; i <= 5; i++) {
		// Increased to generate five related colors
		let color = {
			h: (baseColor.h + getRandomInt(10, 40) * i) % 360,
			s: baseColor.s,
			l: baseColor.l,
		};
		colors.push(color);
	}

	// Convert HSL to RGB
	return colors.map((color) => hslToRgb(color.h, color.s, color.l));
}

export default function generateCardColors() {
	// Generate harmonious colors
	let harmoniousColors = generateHarmoniousColors();

	// Assign colors to specific parts
	return {
		gradientBackgroundStart: harmoniousColors[0], // Starting color for gradient
		gradientBackgroundEnd: harmoniousColors[1], // Ending color for gradient
		firstColor: harmoniousColors[2].replace("rgb(", "").replace(")", ""), // Removing "rgb()" for the animation colors
		secondColor: harmoniousColors[3].replace("rgb(", "").replace(")", ""),
		thirdColor: harmoniousColors[4].replace("rgb(", "").replace(")", ""),
		fourthColor: harmoniousColors[5].replace("rgb(", "").replace(")", ""),
		// fifthColor: harmoniousColors[6].replace("rgb(", "").replace(")", ""), // Adding the fifth color
	};
}

