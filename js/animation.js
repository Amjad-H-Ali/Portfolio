const animate = () => {

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	particles.drawAll();
	particles.moveAll();
	particles.collisionDetection();
	requestAnimationFrame(animate);
	getText();
};

animate();