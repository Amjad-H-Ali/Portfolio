const animate = () => {

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	particles.drawAll();
	particles.moveAll();
	particles.collisionDetection();
	requestAnimationFrame(animate);

	ctx.beginPath();

	const ratio = 35/1000;

	const size = canvas.width * ratio;

	const text = 'Welcome, I\'m Amjad Ali.';

	ctx.font = `bold ${size}px Raleway `;

	ctx.fillStyle = "#444";

    const txtCenter = ctx.measureText(text).width/2;

	ctx.fillText(text,canvas.width/2 - txtCenter,canvas.height/2);
}

animate();