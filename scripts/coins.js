

export class Coin {
    constructor(position, image) {
        this.position = position;
        this.image = image;
    }

    build() {
        const canvas=document.querySelector('.map');
        const c=canvas.getContext('2d');
        
        c.drawImage(this.image, this.position.x+25, this.position.y+25, 15, 15);
    }
}
