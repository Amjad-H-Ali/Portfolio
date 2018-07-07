let boundary = new Rectangle(200, 200, 200, 200);
let qt = new QuadTree(boundary, 4);


for (let i = 0; i < 1; i ++) {
	let p = new Point(Math.random(), Math.random());
	qt.insert(p);
}

console.log(qt);
//Canvas
const canvas = document.getElementById('canvas');
//get Context
const ctx = canvas.getContext('2d');



// Setting W and H of canvas (responsive)

const resizeCanvas = () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

window.onresize = resizeCanvas;

window.onload = resizeCanvas;







