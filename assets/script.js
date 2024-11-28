const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Récupérer les éléments nécessaires
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dotselected = document.querySelector('dot_selected')

// Index pour suivre l'image courante
let currentIndex = 0;

// Fonction pour mettre à jour la bannière avec une nouvelle slide
function updateBanner(index) {
	// Mettre à jour l'image
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
	// Mettre à jour le texte
	bannerText.innerHTML = slides[index].tagLine;

	dotselected = display[index]
}

// Ajouter un event listener pour le clic sur la flèche gauche
arrowLeft.addEventListener('click', () => {
	// Décrémenter l'index (retour au dernier élément si on est au début)
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	updateBanner(currentIndex);
});

// Ajouter un event listener pour le clic sur la flèche droite
arrowRight.addEventListener('click', () => {
	// Incrémenter l'index (retour au premier élément si on est à la fin)
	currentIndex = (currentIndex + 1) % slides.length;
	updateBanner(currentIndex);
});

