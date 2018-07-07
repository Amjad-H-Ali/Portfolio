class Point {
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}
}

class Rectangle {
	constructor(x,y,w,h) {
		this.x = x;
		this.y = y; 
		this.w = w;
		this.h = x;
	}

	contains(point) {
		return (point.x > this.x - this.w &&
			point.x < this.x + this.w &&
			point.y > this.y - this.h &&
			point.y < this.y + this.h
		);
	}
}

class QuadTree {
	constructor(boundary, n) {
		this.boundary = boundary;
		this.capacity = n;
		this.points = [];
		this.divided = true;
	}
	subdivide() {
		const {x, y, w, h} = this.boundary;
		let ne = new Rectangle(x + w/2, y - h/2, w/2, h/2)
		let nw = new Rectangle(x - w/2, y - h/2, w/2, h/2)
		let se = new Rectangle(x + w/2, y + h/2, w/2, h/2)
		let sw = new Rectangle(x - w/2, y + h/2, w/2, h/2)

		this.northeast = new QuadTree(ne);
		this.northwest = new QuadTree(nw);
		this.southeast = new QuadTree(se);
		this.southwest = new QuadTree(sw);
		
	}	
	

	insert(point) {

		if (!this.boundary.contains(point)) {
			return;
		}

		if (this.points.length < this.capacity) {
			this.points.push(point);
		} 
		else {
			if (!this.divided) {
				this.subdivide();
			}
			
			this.northeast.insert(point);
			this.northwest.insert(point);
			this.southeast.insert(point);
			this.southwest.insert(point);

		}

	}
}