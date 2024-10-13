export class Villain {
    constructor({ position, velocity, image }) {
        this.position = position;
        this.velocity = velocity;
        this.image = image;

        this.width = 619; 
        this.height = 403; 
    }

    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        
        
    }

    build() {
        const canvas = document.querySelector(".map");
        const c = canvas.getContext("2d");
        
        c.drawImage(this.image, 0, 0, this.width, this.height, this.position.x, this.position.y, 40, 50);
    }
}




    