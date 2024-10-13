

const canvas=document.querySelector('.map');
const c=canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;
const offscreenCanvas = document.createElement('canvas');
const offscreenCtx = offscreenCanvas.getContext('2d');
offscreenCanvas.width = canvas.width;
offscreenCanvas.height = canvas.height;
import {Boundary} from "./map.js";



 
const map=[
    [ '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7' ],
    [ '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7' ],
    [ '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7' ],
    [ '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7' ],
    [ '7', '7', '7', '7', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '3', '3', '3', '3', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '7', '7', '7', '7' ],
    [ '7', '7', '7', '7', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '3', '3', '3', '3', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '7', '7', '7', '7' ],
    [ '7', '7', '7', '7', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '4', '4', '7', '7', '7', '7' ],
    [ '7', '7', '7', '7', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '4', '4', '7', '7', '7', '7' ],
    [ '7', '7', '7', '7', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '1', '1', '3', '3', '0', '0', '0', '0', '0', '0', '3', '3', '1', '1', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '7', '7', '7', '7' ],
    [ '7', '7', '7', '7', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '1', '1', '3', '3', '0', '0', '0', '0', '0', '0', '3', '3', '1', '1', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '7', '7', '7', '7' ],
    [ '7', '7', '7', '7', '4', '4', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '7', '7', '7', '7' ],
    [ '7', '7', '7', '7', '4', '4', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '7', '7', '7', '7' ],
    [ '7', '7', '7', '7', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '3', '3', '3', '3', '3', '3', '0', '0', '7', '7', '7', '7' ],
    [ '7', '7', '7', '7', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '3', '3', '3', '3', '3', '3', '0', '0', '7', '7', '7', '7' ],
    [ '7', '7', '7', '7', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '3', '3', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '7', '7', '7', '7' ],
    [ '7', '7', '7', '7', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '3', '3', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '7', '7', '7', '7' ],
    [ '7', '7', '7', '7', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '1', '1', '3', '3', '7', '7', '7', '7' ],
    [ '7', '7', '7', '7', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '1', '1', '3', '3', '7', '7', '7', '7' ],
    [ '7', '7', '7', '7', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '2', '2', '4', '4', '0', '0', '0', '0', '0', '0', '7', '7', '7', '7' ],
    [ '7', '7', '7', '7', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '2', '2', '4', '4', '0', '0', '0', '0', '0', '0', '7', '7', '7', '7' ],
    [ '7', '7', '7', '7', '2', '2', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '7', '7', '7', '7' ],
    [ '7', '7', '7', '7', '2', '2', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '7', '7', '7', '7' ],
    [ '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7' ],
    [ '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7' ],
    [ '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7' ],
    [ '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7' ],
]

const border=[ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ];
const img =new Image();
img.src="../images/wall.jpg";
const bmg1 =new Image();
bmg1.src="../images/wall.png";
const bmg2 =new Image();
bmg2.src="../images/wall.png";
const bmg3 =new Image();
bmg3.src="../images/wall.png";
const bmg4 =new Image();
bmg4.src="../images/wall.png";
const images = [img, bmg1, bmg2, bmg3, bmg4];
let loaded = 0;
let bsize=25;

images.forEach(image => {
    image.onload = () => {
        loaded++;
        if (loaded == 5) {
            
            map.forEach((row,i)=>{
                    row.forEach((symbol,j)=>{
                        switch(symbol){
                            case '7':border[i][j]=new Boundary({position : {x:120+bsize*j,y:25+bsize*i},image:img});
                             border[i][j].draw(offscreenCtx);
                             border[i][j].blocked=true;
                             break;
                            case '1':border[i][j]=new Boundary({position : {x:120+bsize*j,y:25+bsize*i},image:bmg1});
                             border[i][j].draw(offscreenCtx);
                             border[i][j].blocked=true;
                             break;
                            case '2':border[i][j]=new Boundary({position : {x:120+bsize*j,y:25+bsize*i},image:bmg2});
                             border[i][j].draw(offscreenCtx);
                             border[i][j].blocked=true;
                             break;
                            case '3':border[i][j]=new Boundary({position : {x:120+bsize*j,y:25+bsize*i},image:bmg3});
                             border[i][j].draw(offscreenCtx);
                             border[i][j].blocked=true;
                             break;
                            case '4':border[i][j]=new Boundary({position : {x:120+bsize*j,y:25+bsize*i},image:bmg4});
                             border[i][j].draw(offscreenCtx);
                             border[i][j].blocked=true;
                             break;
                             
                             default:  
                             border[i][j] = new Boundary({position: {x: 120 + bsize * j, y: 25 + bsize * i}, image: null});
                             border[i][j].blocked = false;  
                             break;
                     
                        }
                                   
                    })
         });
        c.drawImage(offscreenCanvas, 0, 0);}}})
         function render() {
            c.clearRect(0, 0, canvas.width, canvas.height); // Clear the main canvas
            c.drawImage(offscreenCanvas, 0, 0); // Draw the offscreen canvas
          }
          
          // Call the render function whenever needed to update the main canvas
          render();
         
import {Player} from "./player.js";
import{Bullet} from "./bullet.js"
const char1=new Image;
char1.src="../images/walk with knife.png";
var p;
let path = [];
var targetIndex = 0;
let isMoving = false;
char1.onload=()=>{
p= new Player({position:{x:300,y:350},velocity:{x:0,y:0},image:char1}) 
p.build();


function move(){
    
c.clearRect(0,0,canvas.width,canvas.height);
render();
p.build();
if(boundary_check(p)==false){
    c.save();
    c.translate(p.position.x+40/2,p.position.y+50/2);
    c.rotate(p.angle);
    c.clearRect(-25,-25,45,50);
    c.restore();
    
    p.update();
    p.build();
}   

villains.forEach((vill)=>{
    
    vill.bullets.forEach((bullet, index) => {
        if(boundary_check(bullet) || kill_check(p,bullet)){
            vill.bullets.splice(index, 1);
            return;
        }
        bullet.update();})

    villran();
    vill.update();
    vill.build();
    })

    
    
    


    requestAnimationFrame(move);
}
move();}


addEventListener("keydown",(event)=>{
    
    if(event.key=="ArrowDown" || event.key=="s"){
        p.velocity.y=4;
        
    }
    if(event.key=="ArrowUp" || event.key=="w"){
        p.velocity.y=-4;
    }
    if(event.key=="ArrowRight" || event.key=="d"){
        p.velocity.x=4;
    }
    if(event.key=="ArrowLeft" || event.key=="a"){
        p.velocity.x=-4;
    }
    p.angle=Math.atan2(p.velocity.y,p.velocity.x);
})
addEventListener("keyup",(event)=>{
    
    if(event.key=="ArrowDown" || event.key=="s"){
        p.velocity.y=0;
    }
    if(event.key=="ArrowUp" || event.key=="w"){
        p.velocity.y=0;
    }
    if(event.key=="ArrowRight" || event.key=="d"){
        p.velocity.x=0;
    }
    if(event.key=="ArrowLeft" || event.key=="a"){
        p.velocity.x=0;
    }
})
function boundary_check(p) {
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[i].length; j++) {
        if (map[i][j] != 0) {
          const wallX = 120 + 25 * j;
          const wallY = 25 + 25 * i;
          const wallWidth = 25;
          const wallHeight = 25;
  
          if (
            p.position.x+p.velocity.x < wallX + wallWidth &&
            p.position.x +p.velocity.x+ 40 > wallX &&
            p.position.y +p.velocity.y< wallY + wallHeight &&
            p.position.y +p.velocity.y+ 50 > wallY
          ) {
            return true; 
          }
        }
      }
    }
    return false;
  }
  import { Villain } from "./villain.js";
  const villainImage = new Image();
villainImage.src = "../images/vill.png"; 

let villains = [];


villainImage.onload = () => {
    villains.push(new Villain({ position: { x: 700, y: 200 }, velocity: { x: 1, y: 0 }, image: villainImage }));
    villains.push(new Villain({ position: { x: 700, y: 500 }, velocity: { x: 1, y: 0 }, image: villainImage }));
    villains.push(new Villain({ position: { x: 700, y: 300 }, velocity: { x: 1, y: 0 }, image: villainImage }));
    villains.forEach((vill)=>{ vill.build();})}
    let bullets = [];
const bulletImage = new Image();
bulletImage.src = "../images/bullet.png";
    function villran(){
        var arr=[1,2,3,4];
        var arr= shuffleArray(arr);
        let s=Math.ceil(Math.random*3);
        
        villains.forEach((vill)=>{
            if (getDistance(vill, p) < 95 && !(p.position.x < vill.position.x && p.velocity.x>=0 && vill.velocity.x>0) && !(p.position.x > vill.position.x && p.velocity.x<=0 && vill.velocity.x<0)) {
                
               vill.startShooting(p);
            }
            else{vill.stopShooting();}
            
            if(boundary_check(vill)){
                if(arr[0]==1){
            vill.velocity.x=1;
                vill.velocity.y=0;}
                if(arr[0]==2){vill.velocity.y=-1;
                    vill.velocity.x=0;}
                if (arr[0]==3){ vill.velocity.x=-1;
                    vill.velocity.y=0;}
                if(arr[0]==4){
                    vill.velocity.y=1;
                    vill.velocity.x=0;
                }
                if(boundary_check(vill)){
                    if(arr[1]==1){
                        vill.velocity.x=1;
                            vill.velocity.y=0;}
                            if(arr[1]==2){vill.velocity.y=-1;
                                vill.velocity.x=0;}
                            if (arr[1]==3){ vill.velocity.x=-1;
                                vill.velocity.y=0;}
                            if(arr[1]==4){
                                vill.velocity.y=1;
                                vill.velocity.x=0;
                            }
                    
                    if(boundary_check(vill)){
                        if(arr[2]==1){
                            vill.velocity.x=1;
                                vill.velocity.y=0;}
                                if(arr[2]==2){vill.velocity.y=-1;
                                    vill.velocity.x=0;}
                                if (arr[2]==3){ vill.velocity.x=-1;
                                    vill.velocity.y=0;}
                                if(arr[2]==4){
                                    vill.velocity.y=1;
                                    vill.velocity.x=0;
                                }
                      if(boundary_check(vill)){
                        if(arr[3]==1){
                            vill.velocity.x=1;
                                vill.velocity.y=0;}
                                if(arr[3]==2){vill.velocity.y=-1;
                                    vill.velocity.x=0;}
                                if (arr[3]==3){ vill.velocity.x=-1;
                                    vill.velocity.y=0;}
                                if(arr[3]==4){
                                    vill.velocity.y=1;
                                    vill.velocity.x=0;
                                }
                      }
                    }
                }}})
            
            }
            function shuffleArray(array) {
                for (var i = array.length - 1; i > 0; i--) { 
               
                    
                    var j = Math.floor(Math.random() * (array.length));
                               
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
                   
                return array;
             }
             function getDistance(vill, player) {
                const dx = vill.position.x - player.position.x;
                const dy = vill.position.y - player.position.y;
                return Math.sqrt(dx * dx + dy * dy); 
            }

            function kill_check(p,b) {
                
                    
                      const wallX = p.position.x;
                      const wallY = p.position.y;
                      const wallWidth = 40;
                      const wallHeight = 50;
              
                      if (
                        b.position.x+b.velocity.x < wallX + wallWidth &&
                        b.position.x +b.velocity.x+ 10 > wallX &&
                        b.position.y +b.velocity.y< wallY + wallHeight &&
                        b.position.y +b.velocity.y+ 10 > wallY
                      ) {
                        return true; 
                      }
                    
                  
                
                return false;
            }