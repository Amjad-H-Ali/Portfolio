

const getDistance = (x1, y1, x2, y2, radius) => {
	const xDist = x2 - x1;
	const yDist = y2 - y1;

	return (Math.sqrt((xDist ** 2) + (yDist ** 2))) - (radius * 2);
};
const getRandColor = () => {
		const colors = ['#7FFFD4', '#FF80AA', '#00FFFF'];
		const indx = Math.floor(Math.random() * 3);
		return colors[indx];
}

const mouse = {
	x: undefined,
	y: undefined
};

canvas.addEventListener('mousemove', (e) => {
	mouse.x = e.clientX;
	mouse.y = e.clientY
});

const getText = () => {
	ctx.beginPath();
	const ratio = 40/900;
	const size = canvas.width * ratio;

	const text = 'Welcome, I\'m Amjad Ali.';

	ctx.font = `bold ${size}px Raleway `;

	ctx.fillStyle = "#555";

    const txtCenter = ctx.measureText(text).width/2;

	ctx.fillText(text,canvas.width/2 - txtCenter,canvas.height/2);


};


	

	

	

/*

* Rotates coordinate sytem for velocities
* Takes velocities and alters them as if the coordinate system  they're on was rotated
* @param Object | velocity | the velocity of an individual particle
* @param Float  | angle    | the angle of collision of two particles in radians
* @eturn Object | The altered x and y velocities after the coordinate system was rotated


*/

const rotate = (velocity, angle) => {
	const rotatedVelocities = {
		x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
		y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
	};

	return rotatedVelocities;
};


/*

* Swaps out two colliding particles' x and y velocities after running through an elastic collision reaction equation
* @param Object | particle      | a particle object with x and y coordinates, plus velocity
* @param Object | otherParticle | a particle object with x and y coordinates, plus velocity
* @return undefined  | Does not return a value

*/


const resolveCollision = (particle, otherParticle) => {
	const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
	const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

	const xDist = otherParticle.x - particle.x;
	const yDist = otherParticle.y - particle.y;

	// Prevent accidental overlap of particles
	if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
		// Grab angle between two colliding particles
		const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

		// Store mass in var for better readability in collision equation.

		const m1 = particle.mass;
		const m2 = otherParticle.mass;

		// Velocity before equation
		const u1 = rotate(particle.velocity, angle);
		const u2 = rotate(otherParticle.velocity, angle);


		// Velocity after 1d collision equation
		const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y};
		const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y};

		// Final velocity after rotating axis back to original location
		const vFinal1 = rotate(v1, -angle);
		const vFinal2 = rotate(v2, -angle);

		// Swap particles velocity for realistic bounce effect

		particle.velocity.x = vFinal1.x;
		particle.velocity.y = vFinal1.y;

		otherParticle.velocity.x = vFinal2.x;
		otherParticle.velocity.y = vFinal2.y;

	}
};

class Ball	{
	constructor ({x, y}, r) {
		this.x = x;

		this.y = y;

		this.r = r;

		this.velocity = {
			x: (Math.random() - 0.5) * 4,
			y: (Math.random() - 0.5) * 4
		};

		this.mass = 1;

		this.color = getRandColor();

		this.opacity = 0.1;
	}

	draw () {
		const {x, y, r, color, opacity} = this;

		ctx.beginPath();
		
		ctx.arc(x, y, r, 0, Math.PI * 2);

		ctx.save();

		ctx.globalAlpha = opacity;
		
		ctx.fillStyle = color;

		ctx.fill();

		ctx.restore();

		ctx.strokeStyle = color;

		ctx.stroke();

		ctx.closePath();

	}

	move () {

		if (this.x + this.velocity.x > canvas.width - this.r || this.x + this.velocity.x < this.r) {

			this.velocity.x = -this.velocity.x;
		};

		if (this.y + this.velocity.y > canvas.height - this.r || this.y + this.velocity.y < this.r) {

			this.velocity.y = -this.velocity.y;
		};

		this.x += this.velocity.x;
		this.y += this.velocity.y;

		if (getDistance(mouse.x, mouse.y, this.x, this.y, this.r) < 250 && this.opacity < 0.7) {
			this.opacity = Math.min(0.7, this.opacity += 0.03);
		}
		else if (this.opacity > 0.1) {
			this.opacity = Math.max(0.1, this.opacity -= 0.03);
		};

	}
	checkDistance () {
		const {balls} = particles;

		for (let i = 0, len = balls.length; i < len; i ++) {
			if (this !== balls[i]) {
				if (getDistance(this.x, this.y, balls[i].x, balls[i].y, this.r) < 0) {
					resolveCollision(this, balls[i]);
				};
			};
		};
	}
};

class BallFactory {
	constructor () {
		this.balls = [];
	}

	getRandCoor (radius) {
		const {width, height}       = canvas,
		{balls:{length:bLen},balls} = this,
		xCoor                       = (Math.random() * (width - radius * 2)) + radius,
		yCoor                       = (Math.random() * (height - radius * 2)) + radius;	


		for (let i = 0; i < bLen; i ++) {
			if (getDistance(xCoor, yCoor, balls[i].x, balls[i].y) < 0) {
				return this.getRandCoor();
			};
		};	
		return {
			x: xCoor,
			y: yCoor
		};
	}


	generate () {
		const 	widthRatio  = 0.2,
				heightRatio = 0.016,
				amount      = Math.floor(canvas.width * widthRatio),
				radius      = Math.floor(canvas.height * heightRatio);

		this.balls = [];
		for (let i = 0; i < amount; i ++) {
			const newBall = new Ball(this.getRandCoor(radius), radius);
			this.balls.push(newBall);
		}	
	}


	drawAll () {
		const {balls} = this;

		balls.forEach(ball => ball.draw());
	}
	moveAll () {
		const {balls} = this;

		balls.forEach(ball => ball.move());
	}
	collisionDetection () {
		const {balls} = this;

		balls.forEach(ball => ball.checkDistance());
	}

}



const particles = new BallFactory;

// When user resizes window, resize elements and generate new amount of particles
// window.onresize = setUp;

window.addEventListener('resize', () => {
	// Only if we are not on mobile screen so it won't resize when mobile search bar changes sizes when you scroll.
	if (window.innerheight > 1366) {
		setUp();
	};
});

window.onload = setUp;







