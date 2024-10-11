const canvas =document.querySelector(".canvas");
const c=canvas.getContext("2d");
canvas.width=innerWidth;
canvas.height=innerHeight;
import {Player} from "./Player.js";
const char1=new Image;
char1.src="../images/walk with knife.png";
char1.onload=()=>{
var p= new Player({position:{x:40,y:150},velocity:{x:0,y:0},image:char1}) 
p.build();
function move(){
    c.save();
    c.translate(p.position.x+40/2,p.position.y+50/2);
    c.rotate(p.pangle);
    c.clearRect(-20,-25,40,50);
    c.restore();
    p.update();
    p.build();
    requestAnimationFrame(move);
}
addEventListener("click",(event)=>{var theeta=Math.atan2(event.y-p.position.y-25,event.x-p.position.x-20);
    
        if(event.x-p.position.x-20>=0){
            p.pangle=p.angle;
            p.angle=theeta;
        }
        else{
            p.pangle=p.angle;
            p.angle=theeta;
        }
    
    
})
move();

}

