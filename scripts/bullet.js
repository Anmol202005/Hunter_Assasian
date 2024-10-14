export class Bullet {
    constructor({ position, velocity, image }) {
        this.position = position;
        this.velocity = velocity;
        this.image = image; 
    }

    draw() {
        const canvas = document.querySelector(".map");
        const c = canvas.getContext("2d");
        c.drawImage(this.image, this.position.x, this.position.y, 20, 20); 
    }

    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.draw();
    }
}
