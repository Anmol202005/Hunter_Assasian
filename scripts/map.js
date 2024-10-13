 export class Boundary{
    

    constructor({position,image}){
        this.position = position;
        this.image=image;
        this.maxwidth=this.position.x+50;
        this.maxheight=this.position.y+50;
        this.neighbour=[];
        this.f=0;
        this.blocked= false;
        

    }



    draw(c){
        

        c.drawImage(this.image,this.position.x,this.position.y);
    }
   
    
}

