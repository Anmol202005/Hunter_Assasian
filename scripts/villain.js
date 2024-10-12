class Villain {
    constructor({ position, velocity, image }) {
        this.position = position;
        this.velocity = velocity;
        this.image = image;
        
        this.width = 119; 
        this.height = 98; 
    }

    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        
        
    }

    build() {
        const canvas = document.querySelector(".map");
        const c = canvas.getContext("2d");
        
        
        c.drawImage( this.image, 0,0,this.width,this.height,this.position.x,this.position.y,50,50);
            
            
        
    }
}




const canvas = document.querySelector(".map");
const c = canvas.getContext("2d");
        
const villainImage = new Image();
villainImage.src = "villainspirite2.png"; 
let vill;
villainImage.onload = () => {
     vill = new Villain({ position: { x: 800, y: 200 }, velocity: { x: 0, y: 0 }, image: villainImage });

    function move() {
        c.clearRect(vill.position.x, vill.position.y, 50, 50); 
        vill.update(); 
        vill.build(); 
        requestAnimationFrame(move); 
    }


move(); 
}
