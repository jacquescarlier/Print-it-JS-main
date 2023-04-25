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

/* Déclaration des constantes */

const arrowLeft = document.getElementById('arrow_left');
const arrowRight = document.getElementById('arrow_right');
const bannerImg = document.querySelector('.banner-img');
const bannerTxt = document.querySelector('#banner p');

/* const longueur du tableau slides et initialisation de son index à 0 */
const numOfImg = slides.length;
let index = 0;

/* création dot*/
/* console.log centrer pour développement code*/
/* Après j'efface */
function createDots() {
	const dots = document.querySelector('.dots');
	for (let a = 0;
		a < numOfImg; /* For a < the length of the array add 1 */
		a++) {
											console.log("a =", a);
	/* creation of dot with ID*/
	const dot = document.createElement('span');
	dot.id='span' + a; /* create of the ID for span */
											console.log("create dot =", dot.id);
	dot.addEventListener('click', function () {
											console.log("i number target", index);
		updateCarouselImg()/* update image carousel */
	});
	console.log("i number target", index);
	dot.classList.add('dot');
											console.log( "nom des span", dot)
	dots.appendChild(dot);
											console.log("appendChild", dot)
	}	
}
createDots();

	/* update active dot */
function updateDot() {
	const dot = document.getElementsByClassName('dot');
	/* delete dot not selected to leave them empty*/
	/*without this code all the dots are filled one after the other */
	for (let index = 0;
		index < dot.length;
		index++) {
			/* Remove dot fill */
		dot[index].classList.remove('dot_selected');
									console.log("dot remove_update dot", dot[index])
									console.log("dot index", dot[index])
		}
		/* dot selected*/
		
		dot[index].classList.add('dot_selected');
									console.log("dot selected_update dot", dot[index])
}						

/* refresh slideshow images*/
function updateCarouselImg() {
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
	bannerTxt.innerHTML = slides[index].tagLine;
	console.log("updatecarousel");
	updateDot();
}
updateCarouselImg();

/* function arrow_left, previous */
arrowLeft.addEventListener("click", function() {
	j = 0
	nextPrevious();
})

/* function arrow_right, next */
arrowRight.addEventListener("click", function(){
	nextPrevious();
})
/*
/* fonction paramètres left rigth */
function nextPrevious () {
	console.log("nextPrevious du r");
	if (j = 0) {
		if (index == 0) {
		index = numOfImg - 1;
		} else {
		index--;
		}	
		}  else  {
		if (index == numOfImg - 1){
			index = 0;
		} else {
			index++;
		}
	}
	updateCarouselImg();
	console.log("3");
}


	



