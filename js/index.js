
const [ aboutBar, aboutTitle ] = [ document.getElementById('aboutBar'), document.getElementById('aboutTitle') ];
const [ skillsBar, skillsTitle ] = [ document.getElementById('skillsBar'), document.getElementById('skillsTitle') ];
const [ projectBar, projectTitle ] = [ document.getElementById('projectBar'), document.getElementById('projectTitle') ];
const [ contactBar, contactTitle ] = [ document.getElementById('contactBar'), document.getElementById('contactTitle') ];
const [	octMe, meSummary ] = [ document.getElementById('octMe'), document.getElementById('meSummary') ]
const [ octAboutsHTML, octTextsHTML ] = [ document.getElementsByClassName('octAbouts'), document.getElementById('octTexts').children ];
const [ octs, octTexts ] = [ Array.from(octAboutsHTML), Array.from(octTextsHTML) ];
const [ oct ] = octs;
const [ octText ] = octTexts;
const [ project1, project2, project3, project4 ] = [ document.getElementById('project1'), document.getElementById('project2'), document.getElementById('project3'), document.getElementById('project4') ];
const contactSub = document.getElementById('contactSub');
const nav = document.getElementById('nav');
const { offsetHeight:navH } = nav;
const elems = [ aboutTitle, aboutBar, skillsTitle, skillsBar, projectTitle, projectBar, contactTitle, contactBar, oct, octText, octMe, meSummary, project1, project2, project3, project4, contactSub];



const addFixed = () => {
	const {classList} = nav;

	if (!(classList.contains('fixed'))) {
		classList.add('fixed');
	}
}

const removeFixed = () => {
	const {classList} = nav;

	if (classList.contains('fixed')) {
		classList.remove('fixed');
	}
}



const addSlideInRight = (element) => {
	
	const {classList} = element;

	if (!(classList.contains('slideInRight'))) {

		classList.add('slideInRight');
	}	
}

const addSlideInLeft = (element) => {
	
	const {classList} = element;

	if (!(classList.contains('slideInLeft'))) {

		classList.add('slideInLeft');
	}	
}



const addFlipInX = (element) => {
	
	const {classList} = element;

	if (!(classList.contains('flipInX'))) {

		classList.add('flipInX');
	}	
}


const addFadeIn = (element) => {
	
	const {classList} = element;

	if (!(classList.contains('fadeIn'))) {

		classList.add('fadeIn');
	}	
}

const addPop = (element) => {

	const {classList} = element;

	if (!(classList.contains('pop'))) {

		classList.add('pop');
	}
}





const checkPageY = () => {
	
	const pageY = window.pageYOffset;

	if (pageY >= (canvas.height + navH - 2)) {
		addFixed();
	}
	else if (pageY < canvas.height) {
		removeFixed();
	}

	for (let elem of elems) {
		
		const { offsetTop:pos } = elem;

		
		if (pageY > pos-700) { 
			
			if (elem === oct) {
				octs.forEach(oct => addFlipInX(oct));
			}
			else if (elem === octText) {
				octTexts.forEach(octText => addFadeIn(octText));
			}
			else if (elem === aboutTitle || elem === skillsTitle || elem === projectTitle || elem === contactTitle || elem === meSummary || elem === project2 || elem === project4 ) {
				addSlideInLeft(elem);
			}
			else if (elem === contactSub) {
				addPop(elem);
			}
			else {
				addSlideInRight(elem);
			}

		}
	}

}




window.onscroll = checkPageY;

window.onload = checkPageY;