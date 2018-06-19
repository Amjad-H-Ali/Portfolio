const modal = document.getElementById('myModal');

const container = document.getElementById('projects');

const detailTag = document.getElementById('details');

const modalTitle = document.getElementById('title');

const [img1, img2, img3] = [ document.getElementById('img1'), document.getElementById('img2'), document.getElementById('img3') ];

const [online, source] = [ document.getElementById('online'), document.getElementById('source') ];


const modalContent = {
	frogger: {
		title:"Frogger",
		images:["image/frogger1.png", "image/frogger2.png", "image/frogger3.png"],
		details:"Based on the Classic Frogger Game Developed In 1981, guide the Frogger accross traffic and deadly waters to collect points.",
		links:["https://amjad-h-ali.github.io/Frogger/", "https://github.com/Amjad-H-Ali/Frogger"]
	},
	videOjo: {
		title:"Vide-Ojo",
		images:["image/videojo.png", "image/videojo1.png", "image/videojo2.png"],
		details:"Vide-ojo is a video sharing site. Users can create an account or log in to search for and share videos. Users can like videos of one another and post, delete, and edit their own. Our site connects to YouTube's API in order to search videos.",
		links:["http://vide-ojo.herokuapp.com/", "https://github.com/Amjad-H-Ali/Project-2-Video-App"]
	},
	taskManager: {
		title:"GA Task Manager",
		images:["image/taskmanager1.png", "image/taskmanager2.png", "image/taskmanager3.png"],
		details:"A Task Manager for General Assembly students to keep track of their assignments. Users can mark complete assignments.",
		links:["https://fast-reef-71657.herokuapp.com", "https://github.com/Amjad-H-Ali/Genaral-Assembly-Task-Manager-React"]
	},
	finvestor: {
		title:"Finvestor",
		images:["image/finvestor1.png", "image/finvestor2.png", "image/finvestor3.png"],
		details:"Finvestor is a Real Time Stock Watchlist for Investors. Users can search stocks using their ticker symbols, view real time quotes, and add stocks to their watchlist. ",
		links:["https://vast-refuge-61549.herokuapp.com/", "https://github.com/Amjad-H-Ali/Stock_Watchlist_React"]
	}
}


const addImgSrc = (array) => {

	const images = [img1, img2, img3];

	images.forEach((img, i) => img.setAttribute('src', array[i]));
}

const setHrefLogo = (array) => {

	const logos = [online, source];

	logos.forEach((logo, i) => logo.setAttribute('href', array[i]));
}


container.addEventListener('click', (e) => {
	
	let title, images, details, links;

	const target = e.target.id;

	if (target === "frogger" || target === "videOjo" || target === "taskManager" || target === "finvestor"){
		modal.style.display = "block";
	}



	switch (target) {

		case "frogger" :
			({title, images, details, links} = modalContent.frogger);
			modalTitle.innerText = title;
			detailTag.innerText = details;
			addImgSrc(images);
			setHrefLogo(links);
			break;

		case "videOjo" :
			({title, images, details, links} = modalContent.videOjo);
			modalTitle.innerText = title;
			detailTag.innerText = details;
			addImgSrc(images);
			setHrefLogo(links);			
			break;

		case "taskManager" :
			({title, images, details, links} = modalContent.taskManager);
			modalTitle.innerText = title;
			detailTag.innerText = details;
			addImgSrc(images);
			setHrefLogo(links);
			break;

		case "finvestor" :
			({title, images, details, links} = modalContent.finvestor);
			modalTitle.innerText = title;
			detailTag.innerText = details;
			addImgSrc(images);
			setHrefLogo(links);		
			break;
		case "close" :
			modal.style.display = "none";
		

	}
})




// Slide 

let slideIndex = 1;

// Next/previous controls
const plusSlides = (n) => {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
const currentSlide = (n) => {
  showSlides(slideIndex = n);
}

const showSlides = (n) => {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 

  if (n < 1) {slideIndex = slides.length}
  	
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

showSlides(slideIndex);
