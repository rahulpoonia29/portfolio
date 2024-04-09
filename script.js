var list = ["Web Developer", "Web Designer", "Student", "Python Developer"];

var element = document.getElementById("intro-text");
var content = element.innerText;
var i = 0;
var j = 0;

async function showText(element, text, i = 0) {
	for (let i = 0; i < text.length; i++) {
		element.innerText = text.slice(0, i + 1) + "|";
		await new Promise((resolve) => setTimeout(resolve, 100));
	}
}

async function hideText(element, text, i = 0) {
	for (let i = text.length; i >= 0; i--) {
		element.innerText = text.slice(0, i) + "|";
		await new Promise((resolve) => setTimeout(resolve, 100));
	}
}
(async () => {
	while (j < 100) {
		await showText(element, list[i]);
		await new Promise((resolve) => {
			setTimeout(resolve, 200);
		});

		await hideText(element, list[i]);
		j++;
		i++;
		if (i == list.length) {
			i = 0;
		}
	}
})();
//
//
//
//

let slideIndex = 0;
showSlides();

function showSlides() {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	slides[slideIndex - 1].style.display = "block";
	setTimeout(showSlides, 5500); // Change image every 2 seconds
}

let cards = document.getElementsByClassName("info-card");

function showCard(id) {
	for (let i = 0; i < cards.length; i++) {
		cards[i].style.display = "none";
	}
	for (let i = 0; i < cards.length; i++) {
		let elements = document.getElementsByClassName("info-element");
		// console.log(elements[i].children[0]);
		elements[i].children[0].id = "none";
	}
	let card = document.getElementById(id);
	card.style.display = "block";
	let selectedElement = document.querySelector(
		`.info-element:nth-child(${id}) p`
	);
	// console.log(selectedElement);
	selectedElement.id = "underline";
}
showCard("1");

let skills = document.getElementsByClassName("skills");

function showSkills(id) {
	for (let i = 0; i < skills.length; i++) {
		skills[i].style.display = "none";
	}

	let selectedElement = document.querySelector(`.skill-selector`);
	for (let i = 0; i < selectedElement.children.length; i++) {
		selectedElement.children[i].style.backgroundColor = "#fff";
		selectedElement.children[i].style.color = "rgb(0, 0, 0)";
	}

	let card = document.getElementById(id);
	card.style.display = "grid";
	console.log(selectedElement.children[id - 4]);
	selectedElement.children[id - 4].style.backgroundColor =
		"rgb(124, 58, 237)";
	selectedElement.children[id - 4].style.color = "rgb(255, 255, 255)";
}

showSkills("4");
