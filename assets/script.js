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
const banner = document.getElementById('banner');
const arrowLeft = document.getElementById('arrow_left');
const arrowRight = document.getElementById('arrow_right');
const bannerImg = document.querySelector('#banner > img');
const bannerTxt = document.querySelector('#banner > p');

const numOfImg = slides.length;
let i = 0;
console.log("longueur du tableau ", numOfImg);

/* création dot*/
/* console.log centrer pour développement code*/
/* Après j'efface */
function createDots() {
	const dots = document.querySelector('.dots');
	for (let a = 0;
		a < numOfImg;
		a++) {
											console.log("a =", a);
	const dot = document.createElement('span');
	dot.id='span' + a;
											console.log("dot =", dot.id);
	dot.addEventListener('click', function (event) {
		i = Number(event.target.id.replace('span', ''));
		carouselImg()
	});
	dot.classList.add('dot');
											console.log( "nom des span", dot)
	dots.appendChild(dot);
	if (a==0){
		dots.children[a].classList.add('dot_selected');								
	}
	
	}	
}
createDots();
											console.log(createDots);

	/* function select img */
function selected() {
	const dot = document.getElementsByClassName('dot');
	for (let i = 0;
		i < dot.length;
		i++) {
			dot[i].classList.remove('dot_selected');
		}
		dot[i].classList.add('dot_selected');
}									

/* link tableau slides*/
function carouselImg() {
	bannerImg.src = `../assets/images/slideshow/${slides[i].image}`
	bannerTxt.innerHTML = slides[i].tagLine;
	selected();
}
carouselImg();

/* function arrow_left, previous */
arrowLeft.addEventListener("click", function(){
					console.log("i left avant", i);		
	if (i==0) {
		i = numOfImg - 1;
					console.log("i left après", i);
	} else {
		i--;
					console.log ( "i left else", i);
	}
	carouselImg();
})

/* function arrow_right, previous */
arrowRight.addEventListener("click", function(){
					
	/*if (i==0) {
		i = numOfImg - 1;
	}
	else {
		i--;
	}
	carouselImg();
})*/
					console.log("i right avant", i);
	if (i == numOfImg - 1){
		i = 0;
					console.log("i right après", i);
	} else {
		i++;
					console.log ( "i right else", i);
	}
	carouselImg();
})



