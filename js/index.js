
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
const elems = [ aboutTitle, aboutBar, skillsTitle, skillsBar, projectTitle, projectBar, contactTitle, contactBar, oct, octText, octMe, meSummary, project1, project2, project3, project4, contactSub ];





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



	// for (let )


	// const { offsetTop:pos } = elem;

	// if (pageY > pos/2) {

	// 	addSlideIn(elem)
	// }

	

	// if (pageY > 3500) {
	// 	addSlideIn(contactBar);
	// }

	// if (pageY > 3300) {
	// 	addSlideIn(contactTitle);
	// }

	// if (pageY > 2740) {
	// 	addSlideIn(projectBar);
	// }

	// if (pageY > 2675) {
	// 	addSlideIn(projectTitle);
	// }

	// if (pageY > 1630) {
	// 	addSlideIn(skillsBar);
	// }

	// if (pageY > 1470) {
	// 	addSlideIn(skillsTitle);
	// }

	// if (pageY > 800) {
	// 	octTexts.forEach(octText => addFadeIn(octText));
	// }

	// if (pageY > 700) {
	// 	octs.forEach(oct => addFlipInX(oct));
		
	// }


	// if (pageY > 660) {
	// 	addSlideIn(aboutBar);
	// }

	// if (pageY > 400) {
	// 	addSlideIn(aboutTitle);
	// }

}




window.onscroll = checkPageY;

window.onload = checkPageY;