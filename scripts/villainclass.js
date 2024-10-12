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

        c.drawImage(this.image, 0, 0, this.width, this.height, this.position.x, this.position.y, 50, 50);
    }
}

const canvas = document.querySelector(".map");
const c = canvas.getContext("2d");

const villainImages = [
    "villainspirite2.png",
    "villainspirite2.png",  
    "villainspirite2.png"   
];

let villains = [];

let loadedImages = 0;

function createVillain(index, x, y) {
    const villainImage = new Image();
    villainImage.src = villainImages[index];
    villainImage.onload = () => {
        villains.push(new Villain({ position: { x: x, y: y }, velocity: { x: 0, y: 0 }, image: villainImage }));
        loadedImages++;
        if (loadedImages === villainImages.length) {
            move();
        }
    };
}

createVillain(0, 800, 200);  
createVillain(1, 400, 100);  
createVillain(2, 600, 300);  
function move() {
    c.clearRect(0, 0, canvas.width, canvas.height);  
    villains.forEach(vill => {
        vill.update();
        vill.build();
    });
    requestAnimationFrame(move);
}
