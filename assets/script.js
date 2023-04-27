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
		a < numOfImg; 
				/* For a < the length of the array add 1 */
		a++) {
			const dot = document.createElement('span'); 
				/* create of span element*/
			dot.id='span' + a; 
				/* create of the ID for span */
											console.log("dotid : spanx = ",dot.id)
			dot.classList.add('dot'); 
			console.log("dot.classlistadd", dot.value)
				/* nom des id pour dot */										
			dots.appendChild(dot); 
											console.log("appendchild", dots.appendChild(dot) )
				/* ajout d'un noeud à dots pour span id - dot created*/
			}	
}
createDots();
	
/* update  and choice actived dot */
function updateDot() {
	const dot = document.getElementsByClassName('dot');
	console.log("dot-index-avant", dot);
	/* delete dot not selected to leave them empty*/
	/*without this code all the dots are filled one after the other */
	for (let index = 0;
		index < dot.length;		/* logueur de 4 = 0, 1, 2, 3*/					
		index++) {
		dot[index].classList.remove('dot_selected'); 
		/* Remove dot fill */
									console.log("dot remove_update dot", dot[index])
		}
		dot[index].classList.add('dot_selected'); 
		/* actived dot */
									console.log("dot selected_update dot", dot[index])
}	

/* refresh slideshow images*/
function updateCarouselImg() {
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`; 
	/* img selected */
	bannerTxt.innerHTML = slides[index].tagLine; 
	/* text selected */
	updateDot(); 
	/* Appel function updateDot */
}

updateCarouselImg();

/* function arrow_left, previous */
arrowLeft.addEventListener("click", function() {
	 j = 0
	 nextPrevious();	
})

/* function arrow_right, next */
arrowRight.addEventListener("click", function(){
	 j = -1
	nextPrevious();
})

/* function next previous */
function nextPrevious() {

	/*function with ternary operator use */
	switch(j) {
		case 0: 
			index==0 ? index=numOfImg - 1 : index--; 
			/*si (index=0) alors index= numOFImg-1 sinon index -1*/
			break

		case -1:
			index==numOfImg-1 ? index = 0 : index++; 
			/*si (index=numOfImg-1) alors index mis à 0 sinon index+1 */
			break
	}
	updateCarouselImg();
}


	



