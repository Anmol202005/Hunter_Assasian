class Villain {
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
        
        c.drawImage(this.image, 0, 0, this.width, this.height, this.position.x, this.position.y, 50, 50);
    }
}

const canvas = document.querySelector(".map");
const c = canvas.getContext("2d");

const villainImage = new Image();
villainImage.src = "../images/vill.png"; 

let villains = [];


villainImage.onload = () => {
    villains.push(new Villain({ position: { x: 700, y: 200 }, velocity: { x: 0, y: 0 }, image: villainImage }));
    villains.push(new Villain({ position: { x: 700, y: 500 }, velocity: { x: 0, y: 0 }, image: villainImage }));
    villains.push(new Villain({ position: { x: 700, y: 300 }, velocity: { x: 0, y: 0 }, image: villainImage }));

    function move() {
        
        

        villains.forEach(vill => {
            vill.update(); 
            vill.build(); 
        });

        requestAnimationFrame(move); 
    }

    move(); 
}
