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
		/* for loop to create as many dot as indexes in the slide*/
		a < numOfImg; 
		/* For a < the length of the array add 1 */
		a++) {
			const dot = document.createElement('span'); 
			/* create of span element*/
			dot.id='span' + a; 
			/* create of the ID for dot 'span0, span1, .. */	
			dot.classList.add('dot'); 
			/* create the class 'dot' */	
			dots.appendChild(dot); 
			/* adding node dots for "span id=spanx, class=dot" */	
			
			dot.addEventListener('click', function(activeDot) {
				index = Number(activeDot.target.id.replace('span', ''));
			/* --the number function returns a number--
			 --active.target.id handler to get the id of the element that fired an event--
			 --replace "span" by " "--
			 --index number of the chosen dot and put it in the variable "index"-- */
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
	/*function with ternary operator use */
	switch(direction) {
		/* The switch statement evaluates an expression and, depending on the result obtained and the associated case, executes the corresponding statements. */
		case 'left': 
		/* if j='left we do this part  else we go to other "case" */
			index==0 ? index=numOfImg - 1 : index--; 
			/*if (index=0) "true"  index= numOFImg-1 else "false" index -1 (left)*/
			break
			/* to stop there  if the case is true*/

		case 'right':
			index==numOfImg-1 ? index = 0 : index++; 
			/*if (index=numOfImg-1) index mis à 0 else index+1 (right) */
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
	/* call function updateDot */
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




	



