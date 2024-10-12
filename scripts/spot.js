export class Spot{
constructor({position}){
    this.position=position;
    this.maxwidth=this.position.x+50;
    this.maxheight=this.position.y+50;
    this.neighbour=[];
    this.f=0;
    this.blocked= false;
}
}
