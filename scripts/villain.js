import {Bullet} from "./bullet.js"
let villbull=new Image();
villbull.src="../images/bullet.png";
export class Villain {
    constructor({ position, velocity, image }) {
        this.position = position;
        this.velocity = velocity;
        this.image = image;

        this.width = 619;
        this.height = 403;
        this.shootInterval = null;
        this.bullets = [];
        this.speed = 4;
    }

    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        // Update each bullet's position
        this.bullets.forEach((bullet, index) => {
            bullet.update();

            
            if (bullet.position.x < 120+25*4 || bullet.position.x > 120+25*46 || 
                bullet.position.y < 25+25*4 || bullet.position.y > 25+25*26) {
                    const canvas = document.querySelector(".map");
                    const c = canvas.getContext("2d");
          
                this.bullets.splice(index, 1);  
            }
        });
    }

    build() {
        const canvas = document.querySelector(".map");
        const c = canvas.getContext("2d");
        
        // Draw the villain
        c.drawImage(this.image, 0, 0, this.width, this.height, this.position.x, this.position.y, 40, 50);

        // Draw each bullet
        this.bullets.forEach(bullet => {
            bullet.draw(c);
        });
    }

    shootAtHero(hero) {
        const dx = hero.position.x - this.position.x;
        const dy = hero.position.y - this.position.y;
        const angle = Math.atan2(dy, dx);
    
        this.bullets.push(new Bullet({
            position: { x: this.position.x, y: this.position.y + 20 },
            velocity: { x: Math.cos(angle) * this.speed, y: Math.sin(angle) * this.speed },
            image: villbull
        }));
    }

    startShooting(hero) {
        if (this.shootInterval === null) {
            this.shootInterval = setInterval(() => {
                this.shootAtHero(hero);
            }, 500);
        }
    }

    stopShooting() {
        if (this.shootInterval !== null) {
            clearInterval(this.shootInterval);
            this.shootInterval = null;
        }
    }
}
