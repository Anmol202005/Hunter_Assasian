export class Coin {
    constructor({position, image}) {
        this.position = position;
        this.image = image;
        this.velocity={x:0,y:0};
       
    }

    build() {
        const canvas=document.querySelector('.map');
        const c=canvas.getContext('2d');
        
        c.drawImage(this.image, this.position.x, this.position.y, 15, 15);
    }
}
