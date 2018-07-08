
//Canvas
const canvas = document.getElementById('canvas');
//get Context
const ctx = canvas.getContext('2d');

let boundary = new Rectangle(200, 200, 200, 200);
let qtree = new QuadTree(boundary, 4);

// Setting W and H of canvas (responsive)
const resizeCanvas = () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

window.onresize = resizeCanvas;

window.onload = resizeCanvas;



// for (let i = 0; i < 100; i ++) {
// 	let p = new Point((Math.random() * 200) + 200, (Math.random() * 200) + 200);
// 	qtree.insert(p);
// }



// console.log(qtree);

canvas.addEventListener('click', draw = () => {

	
	let m = new Point(event.clientX, event.clientY);
	qtree.insert(m);
	qtree.show();
});




