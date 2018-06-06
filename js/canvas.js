//Canvas
const canvas = document.getElementById('canvas');
//get Context
const ctx = canvas.getContext('2d');



// Setting W and H of canvas (responsive)

const resizeCanvas = () => {
	console.log('k');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

window.onresize = resizeCanvas;

window.onload = resizeCanvas;







