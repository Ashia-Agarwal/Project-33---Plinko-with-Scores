class Particle {
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0,
            density: 0.8
        };
        this.body = Matter.Bodies.circle(x, y, 10, options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        Matter.World.add(world, this.body);
    }

    display() {
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(this.body.position.x, this.body.position.y, 10, 10);
    }
}