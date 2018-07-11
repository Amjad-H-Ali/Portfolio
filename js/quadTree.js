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
		this.h = h;
	}

	contains(point) {
		return (point.x >= this.x - this.w &&
			point.x <= this.x + this.w &&
			point.y >= this.y - this.h &&
			point.y <= this.y + this.h
		);
	}
	intersects(range) {
		return !(range.x - range.w > this.x + this.w || range.x + range.w < this.x - this.w || 
			range.y - range.h > this.y + this.h || range.y + range.h < this.y - this.h
		)
	}
}

class QuadTree {
	constructor(boundary, n) {
		this.boundary = boundary;
		this.capacity = n;
		this.points = [];
		this.divided = false;
	}
	subdivide() {
		const {x, y, w, h} = this.boundary;
		let ne = new Rectangle(x + w/2, y - h/2, w/2, h/2)
		let nw = new Rectangle(x - w/2, y - h/2, w/2, h/2)
		let se = new Rectangle(x + w/2, y + h/2, w/2, h/2)
		let sw = new Rectangle(x - w/2, y + h/2, w/2, h/2)

		this.northeast = new QuadTree(ne, this.capacity);
		this.northwest = new QuadTree(nw, this.capacity);
		this.southeast = new QuadTree(se, this.capacity);
		this.southwest = new QuadTree(sw, this.capacity);
		this.divided = true;
		
	}	
	

	insert(point) {

		if (!this.boundary.contains(point)) {
			return false;
		}

		if (this.points.length < this.capacity) {
			this.points.push(point);
			return true;
		} 
		else {
			if (!this.divided) {
				this.subdivide();
			}
			if (this.northeast.insert(point) || this.northwest.insert(point) || this.southeast.insert(point) || this.southwest.insert(point)) {
				return true;
			}
			
		}
	}
	query(range, found) {
		
		if(!this.boundary.intersects(range)) {
			// empty array
			return ;
		} 
		else {
			for (let p of this.points) {
				if (range.contains(p)) {
					found.push(p);
				}
			}

			if (this.divided) {
				this.northwest.query(range, found);
				this.northeast.query(range, found);
				this.southwest.query(range, found);
				this.southeast.query(range, found);
			}
		}
	}

	show() {
		ctx.rect(this.boundary.x, this.boundary.y, this.boundary.w * 2, this.boundary.h * 2);
		ctx.strokeStyle = '#f00';
		ctx.stroke();

		if (this.divided) {
			this.northwest.show();
			this.northeast.show();
			this.southwest.show();
			this.southeast.show();
		}
		for (let p of this.points) {
			ctx.fillRect(p.x, p.y, 2, 2);
		}
	}
}