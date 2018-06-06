

console.log(canvas);
//Circle class

class Circle {

	constructor(x, y, speedX, speedY){
		this.x = x;

		this.y = y;

		this.r = 30;

		this.speedX = speedX;

		this.speedY = speedY;

	}

	detectCollision(){

		const { x, y, r } = this; 

		const [ left, right, top, bottom ] = [ x, x + r, y, y + r ];

		const {circles} = shape;

		circles.forEach(otherCircle => {


			if(this !== otherCircle ){
				const [otherLeft, otherRight, otherTop, otherBottom] = [otherCircle.x, otherCircle.x + otherCircle.r, otherCircle.y, otherCircle.y + otherCircle.r];
				
				
				//If any condition is true, circle is not colliding, ! to return false when true vice versa
				return(!(left >= otherRight || right <= otherLeft || top >= otherBottom || bottom <= otherTop));
			}	

		})		


	}


}





class CircleFactory {
	constructor(){
		this.circles = [];
	}
	


	generateCircles(numOfCir){

		const { circles } = this;

		for(let i = 0; i < numOfCir; i ++){

			let xPos = Math.random() * canvas.width;

			let yPos = Math.random() * canvas.height;

			const newCircle = new Circle( xPos, yPos, 1, -2); 

			circles.push(newCircle);

		}	
	}

	moveCircles(circle) {


		if (circle.x + circle.speedX > canvas.width - circle.r || circle.x + circle.speedX < circle.r) {
	
			circle.speedX = -circle.speedX;
		}

		if (circle.y + circle.speedY > canvas.height - circle.r || circle.y + circle.speedY < circle.r) {
			
			circle.speedY = -circle.speedY;
		}

		circle.x += circle.speedX;

		circle.y += circle.speedY;

		
	}

	drawCircles({x, y, r}) {
	
		ctx.beginPath();

		ctx.strokeStyle = '#FF80AA';

		ctx.arc(x, y, r, 0, Math.PI * 2 );

		ctx.stroke();

	}	
	
}


const shape = new CircleFactory

shape.generateCircles(5);



















