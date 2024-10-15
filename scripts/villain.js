import {Bullet} from "./bullet.js"
let villbull=new Image();
villbull.src="../images/bull.png";
export class Villain {
    constructor({ position, velocity, image }) {
        this.position = position;
        this.velocity = velocity;
        this.image = image;

        this.width = 50;
        this.height = 50;
        this.shootInterval = null;
        this.bullets = [];
        this.speed = 3;
        this.angle=0;
        this.f=0;
        this.c=0;
    }

    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        
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
        const canvas =document.querySelector(".map");
        const c=canvas.getContext("2d");
        c.save();
        c.translate(this.position.x+50/2,this.position.y+50/2);
        c.rotate(this.angle);
        
        c.drawImage(this.image,0+45*((this.f)%this.image.frameIndex),0,40,60,-20,-25,40,50);
        c.restore();
        // Draw each bullet
        this.bullets.forEach(bullet => {
            bullet.draw();
        });
    }

    shootAtHero(hero) {
        const dx = hero.position.x - this.position.x;
        const dy = hero.position.y - this.position.y;
        const angle = Math.atan2(dy, dx);
    
        this.bullets.push(new Bullet({
            position: { x: this.position.x+40, y: this.position.y + 20 },
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
