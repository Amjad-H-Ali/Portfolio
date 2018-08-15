
//Canvas
const canvas = document.getElementById('canvas');
//get Context
const ctx = canvas.getContext('2d');
// Containers that we will resize
const containers = Array.from(document.getElementsByClassName('container'));



// Setting W and H of canvas (responsive) and generating new amount of particles
const setUp = () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	particles.generate();
	containers.forEach(e => e.setAttribute(`style`, `height:${window.innerHeight}px; width:${window.innerWidth}px;`));
}





