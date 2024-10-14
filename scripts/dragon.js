import { Bullet } from "./bullet.js";
let villbull = new Image();
villbull.src = "../images/bullet.png";

export class Dragon {
    constructor({ position, velocity, image }) {
        this.position = position;
        this.velocity = velocity;
        this.image = image;
        this.f = 0;
        this.c = 0;
        this.bullets = [];
        this.shootInterval = null;  // Ensure consistent naming
        this.speed = 5;  // Set a default bullet speed
    }

    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    build() {
        const canvas = document.querySelector('.map');
        const c = canvas.getContext('2d');

        
        c.drawImage(this.image, 0 + 95 * (this.f % 4), 0, 100, 110, this.position.x, this.position.y, 100, 110);

        this.c++;
        if (this.c % 20 === 0) {
            this.f++;
        }
    }

    shootatvill(vill) {
        const dx = vill.position.x - this.position.x;
        const dy = vill.position.y - this.position.y;
        const angle = Math.atan2(dy, dx);

        
        this.bullets.push(new Bullet({
            position: { x: this.position.x + 40, y: this.position.y + 20 },
            velocity: { x: Math.cos(angle) * this.speed, y: Math.sin(angle) * this.speed },
            image: villbull
        }));
    }

    startShooting(vill) {
        if (this.shootInterval === null) {
            this.shootInterval = setInterval(() => {
                this.shootatvill(vill);
            }, 100); 
        }
    }

    stopShooting() {
        if (this.shootInterval !== null) {
            clearInterval(this.shootInterval);
            this.shootInterval = null;
        }
    }

    drawBullets() {
        const canvas = document.querySelector('.map');
        const c = canvas.getContext('2d');

        
        this.bullets.forEach((bullet) => {
            bullet.update(); 
            bullet.draw(c);  
        });
    }
}
