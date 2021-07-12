class Plinko {
    constructor(x, y) {
        var options = {isStatic: true};
        this.body = Matter.Bodies.circle(x, y, 10, options);
        Matter.World.add(world, this.body);
    }

    display() {
        ellipseMode(CENTER);
        fill(0, 255, 255);
        ellipse(this.body.position.x, this.body.position.y, 20);
    }
}