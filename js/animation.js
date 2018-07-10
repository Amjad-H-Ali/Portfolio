const animate = () => {

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	const {circles, moveCircles, drawCircles} = shape; 

	circles.forEach(circle => {

		moveCircles(circle);

		drawCircles(circle);

		circle.detectCollision();

	})



	window.requestAnimationFrame(animate);
}

animate();