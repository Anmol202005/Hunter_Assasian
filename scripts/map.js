 export class Boundary{
    static width=50;
    static height=50;

    constructor({position,image}){
        this.position = position;
        this.image=image;

    }



    draw(){
        const canvas=document.querySelector('canvas');
const c=canvas.getContext('2d');
        c.drawImage(this.image,this.position.x,this.position.y);
    }
   
    
}

