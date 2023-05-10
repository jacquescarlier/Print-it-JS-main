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

/* Declaration of constants */
const arrowLeft = document.getElementById('arrow_left');
const arrowRight = document.getElementById('arrow_right');
const bannerImg = document.querySelector('.banner-img');
const bannerTxt = document.querySelector('#banner p');

const numOfImg = slides.length;
/* slideshow array length constant and initialization of its index to 0 */
let index = 0;

/* création dot*/
function createDots() {
	const dots = document.querySelector('.dots');
	for (let a = 0;
		a < numOfImg; 
		a++) {
			const dot = document.createElement('span'); 
			dot.id='span' + a; 	
			dot.classList.add('dot'); 	
			dots.appendChild(dot); 	
			
			dot.addEventListener('click', function(activeDot) {
				console.log(activeDot)
				index = Number(activeDot.target.id.replace('span', ''));
			 	updateCarouselImg();	
				});
			}	
}

createDots();

/* function arrow_left, previous */
arrowLeft.addEventListener("click", function() {
	nextPrevious('left');	
})
/* function arrow_right, next */
arrowRight.addEventListener("click", function(){
   nextPrevious('right');
})

/* function for next or previous */
function nextPrevious(direction) {
	
	switch(direction) {
		case 'left': 
			index = index==0 ? numOfImg - 1 : index - 1; 
			break

		case 'right':
			index = index==numOfImg-1 ? 0 : index + 1; 
			break
	}
	updateCarouselImg();
}

/* slideshow refresh*/
function updateCarouselImg() {
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`; 
	/* img selected */
	bannerTxt.innerHTML = slides[index].tagLine; 
	/* text selected */
	
	updateDot(); 
}

	
/* update  and choice actived dot */
function updateDot() {
	const dot = document.getElementsByClassName('dot');
	/* dot class update*/
	for (let index = 0;
		index < dot.length;							
		index++) {
		dot[index].classList.remove('dot_selected'); 
		/* remove dot-selected class from dot */
		}
		dot[index].classList.add('dot_selected'); 
		/* adding a dot_selected class to the active dot */
}	

updateCarouselImg();
/* call updateCarouselImg */




	



